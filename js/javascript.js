$(document).ready(
        function () {
            var opened = false;
            $('#grid > div.uc-container').each(function (i) {

                var $item = $(this), direction;

                switch (i) {
                    case 0 :
                        direction = ['right', 'bottom'];
                        break;
                    case 1 :
                        direction = ['left', 'bottom'];
                        break;
                    case 2 :
                        direction = ['right', 'bottom'];
                        break;
                    case 3 :
                        direction = ['left', 'bottom'];
                        break;
                    case 4 :
                        direction = ['right', 'bottom'];
                        break;
                    case 5 :
                        direction = ['left', 'bottom'];
                        break;

                    case 6 :
                        direction = ['right', 'bottom'];
                        break;
                    case 7 :
                        direction = ['left', 'bottom'];
                        break;
                    case 8 :
                        direction = ['right', 'bottom'];
                        break;
                    case 9 :
                        direction = ['left', 'bottom'];
                        break;
                    case 10 :
                        direction = ['right', 'bottom'];
                        break;
                    case 11 :
                        direction = ['left', 'bottom'];
                        break;
                    case 12 :
                        direction = ['right', 'bottom'];
                        break;
                    case 13 :
                        direction = ['left', 'bottom'];
                        break;
                    case 14 :
                        direction = ['left', 'bottom'];
                        break;
                    case 15 :
                        direction = ['left', 'bottom'];
                        break;
                        
                         case 16 :
                        direction = ['right', 'bottom'];
                        break;
                    case 17 :
                        direction = ['left', 'bottom'];
                        break;
                    case 18 :
                        direction = ['right', 'bottom'];
                        break;
                    case 19 :
                        direction = ['left', 'bottom'];
                        break;
                    case 20 :
                        direction = ['right', 'bottom'];
                        break;
                    case 21:
                        direction = ['left', 'bottom'];
                        break;

                    case 22 :
                        direction = ['right', 'bottom'];
                        break;
                    case 23:
                        direction = ['left', 'bottom'];
                        break;
                    case 24 :
                        direction = ['right', 'bottom'];
                        break;
                    case 25:
                        direction = ['left', 'bottom'];
                        break;
                    case 26 :
                        direction = ['right', 'bottom'];
                        break;
                    case 27 :
                        direction = ['left', 'bottom'];
                        break;
                    case 28:
                        direction = ['left', 'bottom'];
                        break;
                    case 29 :
                        direction = ['left', 'bottom'];
                        break;
                    case 30 :
                        direction = ['left', 'bottom'];
                        break;
                }

                var pfold = $item.pfold({
                    folddirection: direction,
                    speed: 120,
                    onEndFolding: function () {
                        opened = false;
                    }
                });





                $item.find('.icon-eye').on('mouseover', function ()
                {
                    if (!opened)
                    {
                        opened = true;
                        pfold.unfold();

                    }
                });


                $item.find('.btncerrar').on('click', function ()
                {
                    pfold.fold(10);
                });



            });

        });


