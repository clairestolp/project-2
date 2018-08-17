$("#add").on("click", function() {
  var entry = $("#newEntry")
    .val()
    .trim();

  var amount = $("#newAmount")
    .val()
    .trim();

  var category = $("#topCategory").val();

  var newEntry = {
    entry: entry,
    amount: amount,
    category: category
  };

  console.log(newEntry);
  //POST route goes here
  $.post("/user/spent", newEntry, function(data) {
    console.log(data);
  });
});

$(".add").on("click", function() {
  var cat = $(this).attr("data-category");

  var entry = $("#newEntry-" + cat)
    .val()
    .trim();

  var amount = $("#newAmount-" + cat)
    .val()
    .trim();

  var newEntry = {
    entry: entry,
    amount: amount,
    cateogry: cat
  };

  console.log(newEntry);
});
