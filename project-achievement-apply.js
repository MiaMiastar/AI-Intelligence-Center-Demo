(function () {
  'use strict';

  var form = document.getElementById('projectAchievementForm');
  var anchorLinks = document.querySelectorAll('.apply-anchor__link');

  function setActiveAnchor() {
    var hash = window.location.hash || '#panel-1';
    anchorLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === hash;
      link.classList.toggle('apply-anchor__link--active', isActive);
    });
  }

  function initAnchors() {
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        var href = link.getAttribute('href');
        if (href && href.indexOf('#') === 0) {
          var el = document.getElementById(href.slice(1));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
    window.addEventListener('hashchange', setActiveAnchor);
    setActiveAnchor();
  }

  function collectFormData(formEl) {
    var fd = new FormData(formEl);
    var data = {};
    fd.forEach(function (value, key) {
      if (key === 'resultType') {
        if (!data[key]) data[key] = [];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    return data;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = collectFormData(form);
      console.log('Project achievement apply data:', data);
      alert('成果评估申请已提交（当前为演示，未实际发送）。');
      window.location.href = 'dashboard-projects.html';
    });
  }

  var btnSaveOnly = document.getElementById('btnSaveOnly');
  if (btnSaveOnly) {
    btnSaveOnly.addEventListener('click', function () {
      if (!form) return;
      var data = collectFormData(form);
      console.log('Project achievement save only:', data);
      try {
        localStorage.setItem('projectAchievementDraft', JSON.stringify(data));
      } catch (err) {
        console.warn('localStorage save failed', err);
      }
      alert('已保存草稿，可继续编辑。');
    });
  }

  initAnchors();
})();
