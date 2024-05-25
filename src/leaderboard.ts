export interface LeaderboardEntry {
    name: string;
    version: string;
    score: number;
    date: Date;
    build: string;
    hash: string;
    // TODO: recent: ?string
}


export function Leaderboard<T extends HTMLTableElement>(element: T, entries: LeaderboardEntry[]) {
    // TODO: sort rows by score
    renderTable(element);
    renderRows(element, entries);
}


function renderTable<T extends HTMLTableElement>(element: T) {
    element.className = 'w-full min-w-max table-auto text-left';
    const headingsHTML = `
    <thead>
    <tr>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Name</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Score</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Date</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Status</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">Build</p>
        </th>
        <th class="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
        <p class="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
        </th>
    </tr>
    </thead>
    <tbody></tbody>
    `;
    element.innerHTML = headingsHTML;
}


function renderRows<T extends HTMLElement>(element: T, entries: LeaderboardEntry[]) {
    const tbody = element.querySelector('tbody');
    const rowHTML = entries.map(toRowHTML).join('');
    tbody.innerHTML = rowHTML;
}


function toRowHTML(entry: LeaderboardEntry) {
    // TODO: dynamic image
    // TODO: fix date representation
    return `
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <img src="https://docs.material-tailwind.com/img/logos/logo-spotify.svg" alt="Spotify" class="inline-block relative object-center !rounded-full w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1">
            <div class="flex flex-col">
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">${entry.name}</p>
              <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">${entry.version}</p>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">${entry.score}</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">${entry.date.toLocaleString()}</p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="w-max">
            <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-amber-500/20 text-amber-900 py-1 px-2 text-xs rounded-md" style="opacity: 1;">
              <span class="">in progress</span>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <div class="flex items-center gap-3">
            <div class="flex flex-col">
              <button type="button" class="text-left">
                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize hover:underline">${entry.build}</p>
              </button>
              <button type="button" class="text-left">
                <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70 hover:underline">${entry.hash}</p>
              </button>
            </div>
          </div>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <button class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
            <span class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-400">
                <path d="M19.354 14a3.08 3.08 0 0 1-2.854-1.567.247.247 0 0 0-.444.062l-1.577 5.013a1.538 1.538 0 0 1-2.9-.055L9.256 8.8a.25.25 0 0 0-.485.007 14.646 14.646 0 0 1-1.2 3.754A2.811 2.811 0 0 1 4.873 14H.467a.251.251 0 0 0-.193.091.247.247 0 0 0-.052.207 12 12 0 0 0 23.556 0 .251.251 0 0 0-.245-.3Z"/><path d="M4.873 12c.936 0 1.013 0 1.914-3.564.206-.814.448-1.772.755-2.9A1.479 1.479 0 0 1 9 4.5a1.477 1.477 0 0 1 1.454 1.047l2.4 8.928a.25.25 0 0 0 .48.011l1.345-4.286a1.479 1.479 0 0 1 1.348-.99 1.52 1.52 0 0 1 1.443.774c.1.193.2.382.285.564.581 1.172.75 1.448 1.6 1.448h4.393a.251.251 0 0 0 .179-.075.247.247 0 0 0 .071-.18A12 12 0 0 0 0 11.745.249.249 0 0 0 .252 12Z"/>
              </svg>
            </span>
          </button>
        </td>
      </tr>
    `.trim();
  }

