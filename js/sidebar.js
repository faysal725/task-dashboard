function toggleSidebar() {
  const sidepanel = document.getElementById('sidepanel');
  console.log(sidepanel)
  sidepanel.classList.toggle('translate-x-[-100%]')
}


function toggleProfilePanel() {
  const sidepanel = document.getElementById('profile_panel');
  sidepanel.classList.toggle('translate-x-[100%]')
}


function expandeOrCollapseSidebar() {

  let sidebarContainer = document.getElementById('sidebar_container')

  if (sidebarContainer.getAttribute('aria-expanded') == 'true') {
    runBelow1440()
  } else {
    runUpper440()
  }

}


function expandOrCollapseSubsection(subsectionId) {
  let subsection = document.getElementById(subsectionId)
  subsection.classList.toggle("max-h-52");
}