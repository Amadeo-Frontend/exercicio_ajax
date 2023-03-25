$(document).ready(function () {
  $("#btn-buscar").click(function () {
    $.ajax({
      url: "https://api.github.com/users/Amadeo-Frontend",
      dataType: "json",
      success: function (data) {
        $(".profile-avatar").attr("src", data.avatar_url);
        $(".profile-name").text(data.name);
        $(".profile-username").text(data.login);
        var $profileNumbers = $(".numbers");
        $profileNumbers
          .find(".numbers-item:eq(0) span")
          .text(data.public_repos);
        $profileNumbers.find(".numbers-item:eq(1) span").text(data.followers);
        $profileNumbers.find(".numbers-item:eq(2) span").text(data.following);
        $(".profile-link").attr("href", data.html_url);
      },
    });
  });
});
