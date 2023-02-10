//login btn even handaler

let btn = document.getElementById('btn')
    btn.addEventListener('click',function(){
    	// console.log("btn Push");
    	var loginAriea = document.getElementById('page')
    	      loginAriea.style="display: none;"
    	var  page2      = document.getElementById('page2')
    	           page2.style="display:block;"
    })


//Deposite btn even handaler

   const deposite = document.getElementById('btnDeposite')
         deposite.addEventListener('click',function(){
         	// console.log(" Click Deposite Btn");

   var DepositeAmount = document.getElementById('inpDeposite').value;
    var   Deposite = parseFloat(DepositeAmount)
          console.log(Deposite);

          var carentDipo =  document.getElementById('sowDeposite').innerText;
                carentDipo = parseFloat(carentDipo);
                // console.log(carentDipo)
              var  totalDipo= carentDipo + Deposite ;

              document.getElementById('sowDeposite').innerText=totalDipo;


                       //Balance 

          var carantBalance =  document.getElementById('carantBalance').innerText;
            var   Balance = parseFloat(carantBalance)+totalDipo;
                   document.getElementById('carantBalance').innerText=Balance;
                 

                   document.getElementById('inpDeposite').value=''

         })


//..................

          var Withdrow = document.getElementById('btnWithdrow')

         Withdrow.addEventListener('click',function(){
            // console.log(" Click Deposite Btn");


   var WithdrowAmount = document.getElementById('inpWithdrow').value;
    var   Withdrow = parseFloat(WithdrowAmount)
          // console.log(Withdrow);

    
          var carentWithdrow =  document.getElementById('sowWithdrow').innerText;
                carentWithdrow = parseFloat(carentWithdrow);
                // console.log(carentWithdrow)
              var  totalWithdrow = carentWithdrow + Withdrow;

              document.getElementById('sowWithdrow').innerText=totalWithdrow;


                       //Balance 

          var carantBalance =  document.getElementById('carantBalance').innerText;
            var   Balance = parseFloat(carantBalance)-Withdrow
                   document.getElementById('carantBalance').innerText=Balance;


                  document.getElementById('inpWithdrow').value=""
         })



