function hideSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.remove('active');
        }

        function showSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.add('active');
        }


        // Close sidebar when clicking outside
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('sidebar');
            const menuBtn = document.querySelector('.menu-btn');
            
            if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
                hideSidebar();
            }
        });

       
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hideSidebar();
            }
});