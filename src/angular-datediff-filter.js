angular.module('dateDiff', [])
    .filter('dateDiff', function() {
        return function(input) {
            //Check if have connection
            if(input.length > 1){
                var d1 = input[0].departure.waypoint.schedule.date.split('-'),
                    h1 = input[0].departure.waypoint.schedule.time.split(':'),
                    d2 = input[input.length-1].arrival.waypoint.schedule.date.split('-'),
                    h2 = input[input.length-1].arrival.waypoint.schedule.time.split(':');
                var date1 = new Date(d1[0],d1[1]-1,d1[2],h1[0],h1[1],0,0),
                    date2 = new Date(d2[0],d2[1]-1,d2[2],h2[0],h2[1],0,0);
            }else{
                var d1 = input.departure.waypoint.schedule.date.split('-'),
                    h1 = input.departure.waypoint.schedule.time.split(':'),
                    d2 = input.arrival.waypoint.schedule.date.split('-'),
                    h2 = input.arrival.waypoint.schedule.time.split(':');
                var date1 = new Date(d1[0],d1[1]-1,d1[2],h1[0],h1[1],0,0),
                    date2 = new Date(d2[0],d2[1]-1,d2[2],h2[0],h2[1],0,0);
            }
            var txDate = '';
            var delta = Math.abs(date2 - date1) / 1000;
            var days = Math.floor(delta / 86400);
            delta -= days * 86400;
            if(days){
                txDate += days+'d';
            }
            var hours = Math.floor(delta / 3600) % 24;
            delta -= hours * 3600;
            if(hours) {
                txDate += (days?', ':'') + hours + 'h';
            }
            var minutes = Math.floor(delta / 60) % 60;
            if(minutes){
                txDate += (minutes?' e ':'') + minutes+'m';
            }
            return txDate;
            
        };
    });
