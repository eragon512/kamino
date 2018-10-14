;(function() {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {})
  templates['button'] = template({
    compiler: [7, '>= 4.0.0'],
    main: function(container, depth0, helpers, partials, data) {
      return '<div class="discussion-sidebar-item sidebar-kamino">\r\n    <button class="discussion-sidebar-heading kamino-heading discussion-sidebar-toggle js-menu-target">\r\n    <svg class="octicon octicon-gear" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">\r\n        <path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>\r\n    </svg>\r\n    Kamino\r\n    </button>\r\n    \r\n    <div class="btn-group" role="group">\r\n        <button type="button" class="btn btn-sm btn-primary quickClone">Clone to</button>\r\n        <button type="button" class="btn btn-sm btn-primary dropdown-toggle kaminoButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n            <span class="caret"></span>\r\n            <span class="sr-only">Toggle Dropdown</span>\r\n        </button>\r\n\r\n        <div class="dropdown-menu repoDropdownContainer">\r\n            <input class="repoSearch" type="text" placeholder="Search for a repo..." />\r\n            <hr/>\r\n            <ul class="repoDropdown"></ul>\r\n        </div>\r\n    </div>\r\n</div>'
    },
    useData: true
  })
  templates['modal'] = template({
    compiler: [7, '>= 4.0.0'],
    main: function(container, depth0, helpers, partials, data) {
      var helper

      return (
        '<div id="kaminoModal" class="modal fade" role="dialog">\r\n    <div class="modal-dialog">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <button type="button" class="close" data-dismiss="modal">&times;</button>\r\n                <h4 class="modal-title">Kamino - Confirm Clone</h4>\r\n            </div>\r\n            <div class="modal-body">\r\n                <p class="confirmText">' +
        container.escapeExpression(
          ((helper =
            (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null
              ? helper
              : helpers.helperMissing),
          typeof helper === 'function'
            ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
                name: 'confirmText',
                hash: {},
                data: data
              })
            : helper)
        ) +
        '</p>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <button type="button" class="btn btn-primary cloneAndClose" style="margin-right:20px;" data-dismiss="modal" data-repo="">Clone and Close</button>\r\n                <button type="button" class="btn btn-primary cloneAndKeepOpen" style="margin-right:20px;" data-dismiss="modal" data-repo="">Just Clone</button>\r\n                <button type="button" class="btn btn-info noClone" data-dismiss="modal">Nevermind</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
      )
    },
    useData: true
  })
})()
