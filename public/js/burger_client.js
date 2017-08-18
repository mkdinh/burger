
        $('.carousel').carousel();
        $('.carousel.carousel-slider').carousel({fullWidth: false});
        $('.carousel-item').on('click',function(ev){
                ev.preventDefault();
                console.log("#"+$(this).attr('data-id')+'-popUp')
        })


        $('#burger_name').on('input', function(ev){
                if($(this).val().length >= 5){
                        $('#burger-submit').css('opacity','1')
                        $('#burger-submit').css('animation-play-state','running')
                }
                if($(this).val().length <5){
                        $('#burger-submit').css('opacity','.5')
                        $('#burger-submit').css('animation-play-state','paused')
                }
        })

        $('#burger-submit').on('click',function(ev){
                ev.preventDefault();
                if($('#burger_name').val().length < 5){
                        Materialize.toast('Your burger name is too short!', 2000)
                        return
                }
                else if($('#burger_name').val().length > 30){
                        Materialize.toast('Your burger name is too long!', 2000)
                        return
                }else{
                        var burger_name = $("#burger_name").val().trim()
                        $.ajax({
                                data: {"burger_name": burger_name},
                                type: 'POST',
                                url: '/',
                                success: function(){
                                        Materialize.toast('Successfully added!', 2000,'',function(){
                                                window.location.replace("http://localhost:8080")
                                        }) 

                                }
                        })
                }
        })