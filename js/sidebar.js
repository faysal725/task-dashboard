function toggleSidebar() {
      const sidepanel = document.getElementById('sidepanel');
      console.log(sidepanel)
      sidepanel.classList.toggle('translate-x-[-100%]')
    }


function toggleProfilePanel() {
      const sidepanel = document.getElementById('profile_panel');
      sidepanel.classList.toggle('translate-x-[100%]')
    }