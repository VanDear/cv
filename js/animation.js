function newTyped(){}$(function(){$("#typed").typed({
    strings: ["Smoke test", "Regress test", "UAT", "Alfa test", "Beta test", "Black box", "White box", "Grey box", "Ad-hoc test", "Exploratory test", "Pozitive test", "Negative test", "Static test", "Dynamic test", "Manual test", "Auto test", "Semi-auto test", "UI test", "GUI test", "Usability test", "l10n", "i18n", "Accessibility test", "Critical path test", "Extended test"],
    typeSpeed:90,backDelay:700,contentType:"html",loop:!0,resetCallback:function(){newTyped()}}),$(".reset").click(function(){$("#typed").typed("reset")})});