
      const modalFeedback = document.querySelector('.modal-feedback');
      const modalMap = document.querySelector('.modal-map');
      const feedbackBtn = document.querySelector('.contacts__btn');
      const mapBtn = document.querySelector('.contacts__link-map');
      const closeFeedbackBtn = modalFeedback.querySelector('.modal-feedback__btn-close');
      const closeMapBtn = modalMap.querySelector('.modal-map__btn-close');

      const modalForm = modalFeedback.querySelector('.modal-feedback__form');
      const modalBlock = modalFeedback.querySelector('.modal-feedback_inner');
      const userName = modalFeedback.querySelector('[name=name]');
      const userEmail = modalFeedback.querySelector('[name=email]');

      let isStorageSupport = true;
      let storageName = '';

      /* try/catch */

      try {
        storageName = localStorage.getItem('name');
      } catch (err) {
        isStorageSupport = false;
      }

      /* modal feedback show/close */

      feedbackBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalFeedback.classList.add('modal-show');
        modalBlock.classList.add('modal-content-show');
        if (storageName) {
          userName.value = storageName;
          userEmail.focus();
        } else {
          userName.focus();
        }
      });

      closeFeedbackBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalFeedback.classList.remove('modal-show');
        modalBlock.classList.remove('modal-error');
      });

      window.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape') {
          if (modalFeedback.classList.contains('modal-show')) {
            evt.preventDefault();
            modalFeedback.classList.remove('modal-show');
            modalBlock.classList.remove('modal-error');
          }
        }
      });

      /* form submit */

      modalForm.addEventListener('submit', function(evt) {
        if (!userName.value || !userEmail.value) {
          evt.preventDefault();
          modalBlock.classList.remove('modal-error');
          modalFeedback.offsetWidth = modalFeedback.offsetWidth;
          modalBlock.classList.add('modal-error');
        } else {
          if (isStorageSupport) {
            localStorage.setItem('name', userName.value);
          }
        }
      });

      /* modal map show/close */

      mapBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalMap.classList.add('modal-show');
      });

      closeMapBtn.addEventListener('click', function(evt) {
        evt.preventDefault();
        modalMap.classList.remove('modal-show');
      });

      window.addEventListener('keydown', function(evt) {
        if (evt.key === 'Escape') {
          if (modalMap.classList.contains('modal-show')) {
            evt.preventDefault();
            modalMap.classList.remove('modal-show');
          }
        }
      });
