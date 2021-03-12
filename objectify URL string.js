function convertQueryToMap(query) {
    var obj = {};
    query.split('&').map(function(params) {
      var parts = params.split('=');
      if (!parts[1]) return {};
      parts[0].split('.').reduce(function(cur, next, i, arr) {
        console.log("cur",cur,"next:",next,"i:",i,"arr",arr)
        if (!cur[next]) cur[next] = {};
        if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1]);
        return cur[next];
      }, obj);
    });
    return obj;
  }

  let i = convertQueryToMap("user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue")