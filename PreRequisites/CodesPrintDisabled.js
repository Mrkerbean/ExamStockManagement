$(document).on
('keydown', function(e)
    {
        if(e.ctrlKey && (e.key == "P" || e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) )
        {
            e.cancelBubble = true;
            e.preventDefault();
            e.stopImmediatePropagation();
        }
        if(e.keyCode == 123 || (e.ctrlKey && (e.key == "U" || e.key == "u")))
        {
            e.cancelBubble = true;
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }
);