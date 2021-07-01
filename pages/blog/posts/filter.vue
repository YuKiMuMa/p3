<template>
    <div class="container">
        <div class="filter" id="js-filter">
            <ul class="filter-cond">
            <li><label><input type="checkbox" value="貝類">貝類</label></li>
            <li><label><input type="checkbox" value="光物">光物</label></li>
            <li><label><input type="checkbox" value="白身">白身</label></li>
            <li><label><input type="checkbox" value="赤身">赤身</label></li>
            <!-- /.filter-cond --></ul>

            <ul class="filter-items">
            <li data-filter-key="貝類">つぶ貝</li>
            <li data-filter-key="白身">カンパチ</li>
            <li data-filter-key="赤身">マグロ</li>
            <li data-filter-key="光物">コハダ</li>
            <li data-filter-key="貝類">バイ貝</li>
            <li data-filter-key="白身">マダイ</li>
            <li data-filter-key="貝類">サザエ</li>
        <!-- /.filter-items --></ul>
        <!-- /#js-filter--></div>
    </div>
</template>

<script>
export default {
    
}
var widget = document.getElementById('js-filter');
var checkboxes = widget.querySelectorAll('.filter-cond input[type="checkbox"]');
var checkedList = [];
var filter = function () {
    checkedList = [];

    Array.prototype.forEach.call(checkboxes, function (input) {
        if (input.checked) {
            checkedList.push(input.value);
        }
    });

    widget.setAttribute('data-filter-view', checkedList.join(' '));
};

Array.prototype.forEach.call(checkboxes, function (checkbox) {
    checkbox.addEventListener('change', filter);
});

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
[data-filter-view]:not([data-filter-view=""]) [data-filter-key] {
    display: none;
}
[data-filter-view][data-filter-view~="貝類"] [data-filter-key="貝類"],
[data-filter-view][data-filter-view~="光物"] [data-filter-key="光物"],
[data-filter-view][data-filter-view~="白身"] [data-filter-key="白身"],
[data-filter-view][data-filter-view~="赤身"] [data-filter-key="赤身"] {
    display: block;
}
</style>
