const API_URL = "https://api.spacexdata.com/v4/launches";
const container = document.getElementById("launchesContainer");
const searchInput = document.getElementById("searchInput");
const filterYear = document.getElementById("filterYear");
const filterStatus = document.getElementById("filterStatus");
const sortOrder = document.getElementById("sortOrder");
const loading = document.getElementById("loading");
const modal = document.getElementById("launchModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDetails = document.getElementById("modalDetails");
const modalVideo = document.getElementById("modalVideo");

let allLaunches = [];

// === Fetch Data ===
async function fetchLaunches() {
  try {
    const response = await fetch(API_URL);
    allLaunches = await response.json();
    populateYearFilter(allLaunches);
    displayLaunches(allLaunches);
  } catch (error) {
    container.innerHTML =
      '<p class="text-center text-red-400 col-span-full">Error fetching data.</p>';
  } finally {
    loading.style.display = "none";
  }
}

// === Populate Year Dropdown ===
function populateYearFilter(launches) {
  const years = [...new Set(launches.map((l) => new Date(l.date_utc).getFullYear()))]
    .sort((a, b) => b - a);

  years.forEach((year) => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    filterYear.appendChild(option);
  });
}

// === Display Launch Cards ===
function displayLaunches(launches) {
  container.innerHTML = "";

  if (launches.length === 0) {
    container.innerHTML =
      '<p class="col-span-full text-center text-gray-400">No missions found.</p>';
    return;
  }

  launches.forEach((launch) => {
    const { id, name, date_utc, success, links } = launch;

    const card = document.createElement("div");
    card.className =
      "bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-lg transition transform hover:-translate-y-2 hover:shadow-blue-600/30 hover:border-blue-600";
    card.innerHTML = `
      <div>
        <img 
          src="${links.patch?.small || 'https://upload.wikimedia.org/wikipedia/commons/e/e5/SpaceX_logo_black.png'}" 
          class="w-20 mx-auto mb-3 opacity-90"
        />
        <h3 class="text-xl font-bold text-blue-400 mb-1">${name}</h3>
        <p class="text-gray-400 text-sm mb-2">${new Date(date_utc).toLocaleDateString()}</p>
        <p class="${success ? 'text-green-400' : 'text-red-400'} font-semibold">
          ${success ? '✅ Successful' : '❌ Failed'}
        </p>
      </div>
      <button 
        onclick="showDetails('${id}')"
        class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      >
        View Details
      </button>
    `;
    container.appendChild(card);
  });
}

// === Modal Details ===
function showDetails(id) {
  const launch = allLaunches.find((l) => l.id === id);
  modalTitle.textContent = launch.name;
  modalDate.textContent = `Launch Date: ${new Date(launch.date_utc).toLocaleString()}`;
  modalDetails.textContent = launch.details || "No details available.";

  modalVideo.innerHTML = launch.links.webcast
    ? `<iframe class="w-full h-64 rounded-lg" src="${launch.links.webcast.replace(
        "watch?v=",
        "embed/"
      )}" frameborder="0" allowfullscreen></iframe>`
    : `<p class="text-gray-400">No video available.</p>`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  modal.classList.add("hidden");
}

// === Filtering Logic ===
function applyFilters() {
  let filtered = [...allLaunches];

  const query = searchInput.value.toLowerCase();
  const year = filterYear.value;
  const status = filterStatus.value;
  const sort = sortOrder.value;

  if (query) filtered = filtered.filter((l) => l.name.toLowerCase().includes(query));
  if (year) filtered = filtered.filter((l) => new Date(l.date_utc).getFullYear() == year);
  if (status)
    filtered = filtered.filter((l) => (status === "success" ? l.success : !l.success));

  filtered.sort((a, b) =>
    sort === "asc"
      ? new Date(a.date_utc) - new Date(b.date_utc)
      : new Date(b.date_utc) - new Date(a.date_utc)
  );

  displayLaunches(filtered);
}

[searchInput, filterYear, filterStatus, sortOrder].forEach((el) =>
  el.addEventListener("input", applyFilters)
);

fetchLaunches();
