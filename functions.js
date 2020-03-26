function OpenMainMenu()
{
	var MainMenu = document.getElementById("MainMenu");
	MainMenu.classList.toggle("MainMenuOpen");
	
	var MainSidebar = document.getElementById("MainSidebar");
	MainSidebar.classList.toggle("MainSidebarOpen");
	
	var MainWrapper = document.getElementById("MainWrapper");
	MainWrapper.classList.toggle("MainWrapperShift");
	
	var Publications = document.getElementById("pubBtn");
	Publications.classList.toggle("pubBtnDisable");
}

function DarkMode()
{
	var element = document.body;
	element.classList.toggle("dark-mode");
}
