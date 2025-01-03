function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
     if (sidebar.classList.contains('active')){
         sidebar.classList.remove('active');
        } else {
          sidebar.classList.add('active');
        }
    
}
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}