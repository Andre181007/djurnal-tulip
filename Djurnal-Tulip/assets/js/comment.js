document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submitComment');
    const commentsList = document.querySelector('.comments-list');
    const commentText = document.getElementById('commentText');

    submitButton.addEventListener('click', function() {
        if (commentText.value.trim() === '') {
            alert('Silakan tulis komentar Anda');
            return;
        }

        // Buat elemen komentar baru
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        newComment.innerHTML = `
            <div class="comment-left">
                <div class="comment-avatar">
                    <i class='bx bxs-user'></i>
                </div>
                <div class="comment-info">
                    <h3 class="comment-author">Pengguna</h3>
                    <span class="comment-date">${formattedDate}</span>
                </div>
            </div>
            <p class="comment-content">${commentText.value}</p>
        `;

        // Tambahkan komentar baru ke awal daftar
        commentsList.insertBefore(newComment, commentsList.firstChild);
        
        // Reset form
        commentText.value = '';
        
        // Update jumlah komentar
        updateCommentCount();
    });

    function updateCommentCount() {
        const commentsCount = document.querySelector('.comments-count');
        const totalComments = document.querySelectorAll('.comment').length;
        commentsCount.textContent = `${totalComments} Komentar`;
    }
}); 