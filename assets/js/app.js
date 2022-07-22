M.AutoInit();
var elem = document.getElementById("main-tabs-swipe")
// var instance = M.Tabs.getInstance(elem);
var instance = M.Tabs.init(elem, {
    swipeable: true,
    duration: 100
});

var field = document.getElementById("test_input_for_load")
field.value = localStorage.getItem("test_name")

function test_local_storage()
{   
    var value = document.getElementById("test_input").value
    localStorage.setItem("test_name", value)
    app.toast.show("data in local storage saved!")
}