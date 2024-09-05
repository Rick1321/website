// Use the following to include this JavaScript file 
// <script src="script1.js"></script>

      
      
      
      //VARIABLES
      var money = 0;
      var workers = 0;
      var moneyMultiplier = 1;
      var multiplierCost = 250;
      var clicks = 1;
      var workerCost = 10;
      var lifeTimeMoney = 0;
      var factorys = 0;
      var factoryCost = 1000;
      var factoryCosts = [];
      var bankCosts = [];
      var banks = 0;
      var bankCost = 10000;
      var MoneyVariables = " " ;
      var seconds = 0;
      var minutes = 0;
      var hours = 0;
      var SpeedUpgradeInt = 0;
      var speedOne = 800;
      
      //var speedTwo = 1500;
      //var speed3 = 3600;
      
      var upgradeCost = 450;
     // var upgradeCostTwo = 850;
     // var upgradeCostThree = 1450;
      
      var speedOneCount = 1000;
      //var speedTwoCount = 1000;
      
      var finalMathSpeed = speedOne + speedOneCount;
      //var finalMathSpeedTwo = speedTwo + speedTwoCount;


      var workerInterval;
      var factoryInterval;
      var bankInterval;
      

      
      
      
      function TimeSeconds(){
        seconds += 1;
        
       updateThese();
       
      }
      
      function TimeMinutes(){
        if (seconds >= 60){
          seconds -= 60;
          minutes += 1;
          
          updateThese();
        }
      }
        function TimeHours(){
        if (minutes >= 60){
          minutes -= 60;
          hours += 1;

        updateThese();
      }
        }
      function makeMoney(){
            money += moneyMultiplier;
            clicks = moneyMultiplier;
            lifeTimeMoney += moneyMultiplier;
           

              updateThese();

            
            
              }
   
      
      
      function workersMakesMoney(){
        if(workers >= 1){
          money = money + (workers * moneyMultiplier);
          lifeTimeMoney += (workers * moneyMultiplier);
          
          updateThese();
        }
  }
      
      function FactoryMakesMoney(){
        if (factorys >= 1){
          money = money + (factorys + 12 * moneyMultiplier);
          lifeTimeMoney += (factorys + 12 * moneyMultiplier);

          updateThese();

        }
        
        
      }
      
      


      function buyMultiplier(){
        if(money >= multiplierCost){
          moneyMultiplier *= 1.6;
          money -= multiplierCost;
          multiplierCost = multiplierCost * 2.6;
          clicks = moneyMultiplier;
          
          updateThese();
          
          }
      }
      
      function executeCommand(){
        var command = document.getElementById("commandInput").value;
        
        if (command == "Money500"){
          money = money + 500;
          document.getElementById("commandInput").value = " ✅  Recieved $500 ✅ ";
          updateThese();

        }
        
        if (command == "Worker1"){
          workers = workers + 5;
          document.getElementById("commandInput").value = " ✅  Recieved 1 worker! ✅ ";
          updateThese();
        }
        
        if(command == "Factory1"){
          factorys = factorys + 5;
          document.getElementById("commandInput").value = " ✅  Recieved 1 factory!  ✅ ";
          updateThese();
        }
        
        if(command == "Money10k"){
          money = money + 10000000;
          document.getElementById("commandInput").value = "✅  Recieved 10k ✅  ";
          updateThese();
        
        } 
      }
      
        function BuildFactory(){
          if(money >= factoryCost){
            money -= factoryCost;
            factoryCosts.push(factoryCost);
            factoryCost = factoryCost * 1.7;
            factorys = factorys + 1;
          
          updateThese();

        }
        if(factorys > 0){
            document.getElementById("demolishFactoryButton").style.display = "block";
        }
      
  }
  
            function fireWorker(){
        if (workers >= 1){
          workers = workers - 1;
          money = money + (workerCost / 2);
          workerCost -= workerCost / 2;
          
          updateThese();
      
      if (workers == 0){
        document.getElementById("fireWorkerButton").style.display = "none";
        
        }
        
      }
}
      
      function demolishFactory(){
        if (factorys >= 1){
          factorys = factorys - 1;
          var lastFactoryCost = factoryCosts.pop();
          money = money + (lastFactoryCost / 2);
          factoryCost = lastFactoryCost - 1.1 + 2;
          
          updateThese();
        
        
          if (factorys == 0){
        document.getElementById("demolishFactoryButton").style.display = "none";
        updateThese();

        }
        
      }
  }
      function demolishBank(){
        if(banks >= 1){
          banks = banks - 1;
          var lastBankCost = bankCosts.pop();
          money = money + (lastBankCost / 2);
          bankCost = lastBankCost - 1.1 + 1;

          updateThese();
        }
          if (banks == 0){
            document.getElementById("demolishBankButton").style.display = "none";
          
        }
      }
      
     
      function bankMakesMoney(){
        if(banks >= 1){
          money = money + (banks + 56 * moneyMultiplier);
          lifeTimeMoney += (banks + 56 * moneyMultiplier);
          
          updateThese();
        }
      }
      
         
      
     function formatNumberWithCommas(number) {
    // Convert number to a string
    const parts = number.toString().split('.');
    
    // Format the integer part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Return the formatted number
    return parts.join('.');
      }
      
       function hireWorker(){
        if (money >= workerCost){
          workers = workers + 1;
          money = money - workerCost;
          workerCost = workerCost * 2;
         

          updateThese();
          
            }
        if(workers > 0){
            document.getElementById("fireWorkerButton").style.display = "block";
            updateThese();
        }
    }
          
      
      function updateThese(){
          
          let moneyDisplay = money;
          let moneySufix = " ";
          
          if (money <= 1000){
            moneyDisplay = (money).toFixed(0);
            moneySufix = "";
            
          }else if (money < 1000000){
            moneyDisplay = (money / 1000 ).toFixed(3);
            moneySufix = "K    🥉";
           
          }else if (money < 1000000000){
            moneyDisplay = (money / 1000 ).toFixed(3);
            moneySufix = "M    🏅";
            
          }else if (money < 1000000000000){
            moneyDisplay = (money / 1000 ).toFixed(3);
            moneySufix = "B    🎖";
            
          }else if (money < 1000000000000000){
            moneyDisplay = (money / 1000 ).toFixed(3);
            moneySufix = "T    🎖🎖";

          }else if (money < 1000000000000000000){
            moneyDisplay = (money / 1000 ).toFixed(3);
            moneySufix = "Qd    🎖🎖🎖";
          
            
          }
          
          if (workers == 0){
            document.getElementById("fireWorkerButton").style.display = "none";
        
        }
          
          if(workers > 0){
            document.getElementById("fireWorkerButton").style.display = "block";
        }
        
          if (factorys == 0){
            document.getElementById("demolishFactoryButton").style.display = "none";
        
        }
          
          if(factorys > 0){
            document.getElementById("demolishFactoryButton").style.display = "block";
        }
        
        if (banks == 0){
            document.getElementById("demolishBankButton").style.display = "none";
        
        }
          
          if(banks > 0){
            document.getElementById("demolishBankButton").style.display = "block";
        }
      
          document.getElementById("no_of_Multiplier").innerHTML = Math.round(moneyMultiplier * 10) / 10;
          document.getElementById("multiplierCost").innerHTML = (formatNumberWithCommas(Math.round(multiplierCost)));
          document.getElementById("no_Clciks").innerHTML = (formatNumberWithCommas(Math.round(clicks * 1)));
          document.getElementById("workerCost").innerHTML = (formatNumberWithCommas(Math.round(workerCost)));
          document.getElementById("no_of_money").innerHTML = (formatNumberWithCommas(moneyDisplay + moneySufix));
          document.getElementById("no_of_workers").innerHTML = (formatNumberWithCommas(workers));
          document.getElementById("no_of_banks").innerHTML = (formatNumberWithCommas(banks));
          document.getElementById("factoryCost").innerHTML = (formatNumberWithCommas(Math.round(factoryCost)));
          document.getElementById("bankCost").innerHTML = (formatNumberWithCommas(Math.round(bankCost)));
          document.getElementById("no_of_factorys").innerHTML = (formatNumberWithCommas(Math.round(factorys)));
          document.getElementById("lifeTimeMoney").innerHTML = (formatNumberWithCommas(Math.round(lifeTimeMoney)));
          document.getElementById("no_of_Seconds").innerHTML = seconds;
          document.getElementById("no_of_Minutes").innerHTML = minutes;
          document.getElementById("no_of_Hours").innerHTML = hours;
          document.getElementById("upgradeCost").innerHTML = (upgradeCost === "MAX") ? "MAX" : formatNumberWithCommas(Math.round(upgradeCost));
          document.getElementById("finalMathSpeed").innerHTML = finalMathSpeed;
          /*document.getElementById("finalMathSpeedTwo").innerHTML = finalMathSpeedTwo;
          document.getElementById("upgradeCostTwo").innerHTML = (upgradeCostTwo === "MAX") ? "MAX" : formatNumberWithCommas(Math.round(upgradeCostTwo));
          */
      }
    
      function buildBank(){
        if (money >= bankCost){
            money -= bankCost;
            bankCosts.push(bankCost);
            bankCost = bankCost * 1.9;
            banks = banks + 1;
            

            updateThese();
        }
            if (banks > 0){
              document.getElementById("demolishBankButton").style.display = "block";
            
        }
          
      }
      /*function buyUpgradeSpeedTwo(){
         if (money >= upgradeCostTwo && finalMathSpeedTwo > 200){  
            money -= upgradeCostTwo;            
            upgradeCostTwo = upgradeCostTwo * 5.8;   
            speedTwoCount = speedTwoCount - 200;
            
            finalMathSpeedTwo = speedTwo + speedTwoCount;
            
            clearInterval(factoryInterval);
            //clearInterval(bankInterval);
         
            factoryInterval = setInterval(FactoryMakesMoney, finalMathSpeedTwo);
            //bankInterval = setInterval(bankMakesMoney, 3600);
            updateThese();
         }
         if(finalMathSpeedTwo == 200){
           buyUpgradeSpeedTwo = null;
           upgradeCostTwo = "MAX";
           updateThese();
         }
    
  }*/
      function buyUpgradeSpeed(){
        if (money >= upgradeCost && finalMathSpeed > 200){             
            money -= upgradeCost;            
            upgradeCost = upgradeCost * 5.8;        
            speedOneCount = speedOneCount - 200;
             SpeedUpgradeInt = SpeedUpgradeInt + 1;
             
          finalMathSpeed = speedOne + speedOneCount;

         clearInterval(workerInterval);
         clearInterval(bankInterval);
        
        workerInterval = setInterval(workersMakesMoney, finalMathSpeed);
          bankInterval = setInterval(bankMakesMoney, 3600);
         updateThese();
         
         
         if(finalMathSpeed == 200){
           buyUpgradeSpeed = null;
           upgradeCost = "MAX";
         updateThese();
         }
         
  
        }
        
      }
    
      function start(){
        
        workerInterval = setInterval(workersMakesMoney, finalMathSpeed);
        factoryInterval = setInterval(FactoryMakesMoney, 1800);
        bankInterval = setInterval(bankMakesMoney, 3600);
        
        setInterval(TimeSeconds, 1000);
        setInterval(TimeMinutes, 60000);
        setInterval(TimeHours, 3600000);
        
        updateThese();
      
      

      
      }
      
      start();
      //<p> <span id="finalMathSpeedTwo">2500</span> </p>
      //      <button class="button norm" onclick="buyUpgradeSpeedTwo()">Factory Speed Upgrade: $<span id="upgradeCostTwo">850</span> </button>
