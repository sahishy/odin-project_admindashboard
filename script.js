//ELEMENTS

const dashboardToggleButton = document.getElementById("dashboard_toggle");
const dashboard = document.getElementById("dashboard");

//FUNCTIONS

function toggleDashboard() {
    dashboard.classList.toggle("dashboard-hidden");
}

function screenSizeChange() {

    if(window.innerWidth >= 1100) {
        dashboard.classList.toggle("dashboard-hidden", false)
    } else {
        dashboard.classList.toggle("dashboard-hidden", true)
    }

}

//LOAD

if (window.innerWidth < 1100) {
    dashboard.classList.toggle("dashboard-hidden", true);
} else {
    dashboard.classList.toggle("dashboard-hidden", false);
}

//EVENTS

window.onresize = screenSizeChange;
dashboardToggleButton.addEventListener("click", toggleDashboard);