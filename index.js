 data = [
                {principal:2500,time:1.8},
                {principal:1000,time:5},
                {principal:3000,time:1},
                {principal:2000,time:3}
            ]
            
            function interestCalculator(array){
                interestData=[]
                        for(obj of array){
                            if(obj.principal>=2500 && (obj.time>1 && obj.time<3)){
                                ratevalue=3
                                principalvalue = obj.principal;
                                timevalue = obj.time;
                                interestvalue=(principalvalue*ratevalue*timevalue)/100
                                objV={
                                    principal:principalvalue,
                                    rate:ratevalue,
                                    time:timevalue,
                                    interest:interestvalue
                                    }
                                interestData.push(objV)

                            }
                            else if(obj.principal>=2500 && obj.time>=3){
                                    rate=4
                                    principalvalue = obj.principal;
                                    timevalue = obj.time;
                                    interestvalue=(principalvalue*ratevalue*timevalue)/100
                                    objV={
                                        principal:principalvalue,
                                        rate:ratevalue,
                                        time:timevalue,
                                        interest:interestvalue
                                        }
                                    interestData.push(objV)
                            }
                            else if(obj.principal<2500 || obj.time<=1){
                                rate=2
                                principalvalue = obj.principal;
                                timevalue = obj.time;
                                interestvalue=(principalvalue*ratevalue*timevalue)/100
                                objV={
                                    principal:principalvalue,
                                    rate:ratevalue,
                                    time:timevalue,
                                    interest:interestvalue
                                    }
                                interestData.push(objV)
                            }
                            else{
                                rate=1
                                principalvalue = obj.principal;
                                timevalue = obj.time;
                                interestvalue=(principalvalue*ratevalue*timevalue)/100
                                objV={
                                    principal:principalvalue,
                                    rate:ratevalue,
                                    time:timevalue,
                                    interest:interestvalue
                                    }
                                interestData.push(objV)
                            }


                        }
                        console.log(interestData)
                        return interestData
                    }
                interestCalculator(data) 
