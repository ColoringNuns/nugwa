(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),s=a.n(l),i=(a(15),a(17),a(1)),o=a(2),c=a(4),m=a(3),d=a(5),u=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"heading-div"},r.a.createElement("h3",{className:"heading-float-left"},"Planner"),r.a.createElement("div",{className:"heading-float-right"},r.a.createElement("img",{className:"sched-set btn-outline-warning glyph-icon",alt:"settings",src:"assets/si-glyph-dial-number.svg","data-toggle":"modal","data-target":"#settingsModal"})))}}]),t}(n.Component),p={periodToColor:{"Period A":"red","Period B":"blue","Period C":"green","Period D":"orange","Period E":"purple","Period F":"yellow","Period G":"brown",Brunch:"dark",Lunch:"dark",FlexTime:"dark",Other:"gray"},normalSchedules:[null,[{name:"Period A",start:"8:25",end:"9:45"},{name:"Brunch",start:"9:45",end:"10:00"},{name:"Period B",start:"10:00",end:"11:15"},{name:"Period C",start:"11:25",end:"12:40"},{name:"Lunch",start:"12:40",end:"13:20"},{name:"Period F",start:"13:20",end:"14:35"}],[{name:"Period D",start:"8:25",end:"9:45"},{name:"Brunch",start:"9:45",end:"10:00"},{name:"FlexTime",start:"10:00",end:"10:50"},{name:"Period E",start:"11:00",end:"12:15"},{name:"Lunch",start:"12:15",end:"12:55"},{name:"Period A",start:"12:55",end:"14:15"},{name:"Period G",start:"14:25",end:"15:40"}],[{name:"Period B",start:"8:25",end:"9:50"},{name:"Brunch",start:"9:50",end:"10:05"},{name:"Period C",start:"10:05",end:"11:25"},{name:"Period D",start:"11:35",end:"12:55"},{name:"Lunch",start:"12:55",end:"13:35"},{name:"Period F",start:"13:35",end:"14:55"}],[{name:"Period E",start:"8:25",end:"9:50"},{name:"Brunch",start:"9:50",end:"10:05"},{name:"FlexTime",start:"10:05",end:"10:55"},{name:"Period B",start:"11:05",end:"12:15"},{name:"Lunch",start:"12:15",end:"12:55"},{name:"Period A",start:"12:55",end:"14:05"},{name:"Period G",start:"14:15",end:"15:35"}],[{name:"Period C",start:"8:25",end:"9:40"},{name:"Brunch",start:"9:40",end:"9:55"},{name:"Period D",start:"9:55",end:"11:05"},{name:"Period E",start:"11:15",end:"12:25"},{name:"Lunch",start:"12:25",end:"13:05"},{name:"Period F",start:"13:05",end:"14:15"},{name:"Period G",start:"14:25",end:"15:35"}],null],firstDay:"2019-01-01T00:00:00-07:00",lastDay:"2019-5-31T00:00:00-07:00",keywords:["schedule","extended","holiday","no students","break"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],classNames:{"Period A":"A","Period B":"B","Period C":"C","Period D":"D","Period E":"E","Period F":"F","Period G":"G",Brunch:"Brunch",Lunch:"Lunch",FlexTime:"Flex"}},h=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="class-card-div "+this.getClassColor(this.props.period);return r.a.createElement("div",{className:e},r.a.createElement("p",{className:"card-identifier"},this.getDataClassName(this.props.period)),r.a.createElement("p",{className:"card-name"},this.getClassName(this.props.period)))}},{key:"getClassColor",value:function(e){return null!=p.periodToColor[e]?p.periodToColor[e]:p.periodToColor.Other}},{key:"getClassName",value:function(e){return null!=this.props.appState.classNames[e]?this.props.appState.classNames[e]:null}},{key:"getDataClassName",value:function(e){return null!=p.classNames[e]?p.classNames[e]:e}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={today:new Date},a.alternatesLoaded=function(){return void 0===a.props.appState.events?r.a.createElement("span",{className:"assign-badge red"},"No Alts"):""},a.yesterday=function(){var e=new Date(a.state.today.getTime()-864e5);a.setState({today:e})},a.today=function(){a.setState({today:new Date})},a.tomorrow=function(){var e=new Date(a.state.today.getTime()+864e5);a.setState({today:e})},a.isAlternateSchedule=function(){var e=a.filterEventsByDate(a.state.today);return a.findAlternate(e)},a.filterEventsByDate=function(e){var t=0,n=[];for(var r in a.props.appState.events){var l=(a.props.appState.events[r].start.date||a.props.appState.events[r].start.dateTime.split("T")[0]).split("-");l=new Date(l[0],l[1]-1,l[2]),a.sameDay(l,a.state.today)&&(n[t]=a.props.appState.events[r],t++)}return n},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"heading-div"},r.a.createElement("h2",{className:"heading-float-left"},p.dayNames[this.state.today.getDay()]),r.a.createElement("div",{className:"heading-float-right"},r.a.createElement("img",{className:"btn-outline-secondary glyph-icon",onClick:this.yesterday,alt:"yesterday",src:"assets/si-glyph-arrow-left.svg"}),r.a.createElement("img",{className:"btn-outline-secondary glyph-icon m-1",onClick:this.today,alt:"today",src:"assets/si-glyph-circle.svg"}),r.a.createElement("img",{className:"btn-outline-secondary glyph-icon",onClick:this.tomorrow,alt:"tomorrow",src:"assets/si-glyph-arrow-right.svg"}))),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"heading-div"},r.a.createElement("div",{className:"heading-float-left"},r.a.createElement("p",{className:"month-p no-margin"},p.monthNames[this.state.today.getMonth()]+" "+this.state.today.getDate())),r.a.createElement("div",{className:"heading-float-right"},this.alternatesLoaded())),r.a.createElement("div",{className:"non-header"},this.handleSchedule())))}},{key:"handleSchedule",value:function(){return this.createCards(this.getSchedule(this.isAlternateSchedule()))}},{key:"findAlternate",value:function(e){for(var t in e)for(var a in e[t].summary.split(" "))if(p.keywords.indexOf(e[t].summary.split(" ")[a].toLowerCase())>=0)return e[t];return null}},{key:"sameDay",value:function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}},{key:"getSchedule",value:function(e){if(null==e)return p.normalSchedules[this.state.today.getDay()];if(""===e.description||null==e.description)return null;var t=e.description.split(")");for(var a in t.splice(-1,1),t=t.map(function(e){return e.split(" (")[0]}))t[a]={name:t[a]};return t}},{key:"createCards",value:function(e){if(null!=e){var t,a=[];for(t in e)a[t]=r.a.createElement(h,{appState:this.props.appState,key:t.toString(),period:e[t].name});return r.a.createElement(r.a.Fragment,null,a)}return r.a.createElement("img",{alt:"",className:"no-school",src:"assets/NoSchool.gif"})}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={classNames:{"Period A":"Period A","Period B":"Period B","Period C":"Period C","Period D":"Period D","Period E":"Period E","Period F":"Period F","Period G":"Period G"},name:"Anonymous Cow"},a.saveSettings=function(){a.props.onSave(a.state)},a.handleChange=function(e){var t=e.target;if("inputName"===e.target.id){var n=t.value;a.setState({name:n})}else{var r=t.value,l=t.placeholder,s=a.state.classNames;s[l]=r,a.setState({classNames:s})}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"settingsModal",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Settings"),r.a.createElement("button",{type:"button",className:"close exit-button","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodA"},"Period A"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodA",placeholder:"Period A",onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodB"},"Period B"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodB",placeholder:"Period B",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodC"},"Period C"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodC",placeholder:"Period C",onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodD"},"Period D"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodD",placeholder:"Period D",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodE"},"Period E"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodE",placeholder:"Period E",onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodF"},"Period F"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodF",placeholder:"Period F",onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputPeriodG"},"Period G"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputPeriodG",placeholder:"Period G",onChange:this.handleChange})),r.a.createElement("div",{className:"col form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputName",placeholder:"Anonymous Cow",onChange:this.handleChange})))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveSettings,"data-dismiss":"modal"},"Save")))))}}]),t}(n.Component),f=a(6),E=a.n(f),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",periodDue:""},a.createEvent=function(){},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(){}},{key:"componentDidMount",value:function(){E()("#upcomingModal").on("hidden.bs.modal",function(e){E()(this).find("#eventForm")[0].reset()})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"upcomingModal",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},"Add An Event"),r.a.createElement("button",{type:"button",className:"close exit-button","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{id:"eventForm"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"inputName"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"inputName",placeholder:"Event Name",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"controlPeriod"},"Relevant Period"),r.a.createElement("select",{className:"form-control",id:"controlPeriod",onChange:this.handleChange},r.a.createElement("option",null,"Period A"),r.a.createElement("option",null,"Period B"),r.a.createElement("option",null,"Period C"),r.a.createElement("option",null,"Period D"),r.a.createElement("option",null,"Period E"),r.a.createElement("option",null,"Period F"),r.a.createElement("option",null,"Period G"),r.a.createElement("option",null,"Non school")))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Nevermind"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.createEvent,"data-dismiss":"modal"},"Create")))))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={now:new Date},a.handleClass=function(){var e=a.state.now,t=a.formatClass(a.findNextClass(e)),n=a.findNextTime(e);return null!=t?r.a.createElement("div",{className:"p-b-10"},t," in ",r.a.createElement("strong",null,n)):r.a.createElement("div",{className:"p-b-10"},"School's Out for the Day")},a.findNextClass=function(e){var t=a.parseSchedule(a.getAlternateSchedule(e),e),n=e.getHours()+":"+e.getMinutes();for(var r in t){if(parseInt(n.split(":")[0],10)<parseInt(t[r].start.split(":")[0],10))return t[r].name;if(parseInt(n.split(":")[0],10)===parseInt(t[r].start.split(":")[0],10)&&parseInt(n.split(":")[1],10)<=parseInt(t[r].start.split(":")[1],10))return t[r].name}return null},a.findNextTime=function(e){var t=a.parseSchedule(a.getAlternateSchedule(e),e),n=e.getHours()+":"+e.getMinutes();for(var r in t){var l=t[r].start.split(":")[0]-n.split(":")[0],s=t[r].start.split(":")[1]-n.split(":")[1];s<0&&(l-=1,s=60+s);var i=l+":"+s;if(l>=0)return a.formatTime(i)}return null},a.formatTime=function(e){var t=parseInt(e.split(":")[0],10),n=parseInt(e.split(":")[1],10);return 0===t?n+" minute"+a.isPlural(n):0===n?t+" hour"+a.isPlural(t):t+" hour"+a.isPlural(t)+" and "+n+" minute"+a.isPlural(n)},a.formatClass=function(e){if(null!=e){var t="class-badge "+a.getClassColor(e);return r.a.createElement("span",{className:t},e)}return null},a.parseSchedule=function(e,t){if(null==e)return p.normalSchedules[t.getDay()];var a=e.description.split(")");a.splice(-1,1);var n=a.map(function(e){return e.split(" (")[0]}),r=a.map(function(e){return e.split(" (")[1]});r=r.map(function(e){return e.split("-")});var l,s=!1;for(var i in r)s?(r[i][0]=String(parseInt(r[i][0].split(":")[0],10)+12)+":"+r[i][0].split(":")[1],r[i][1]=String(parseInt(r[i][1].split(":")[0],10)+12)+":"+r[i][1].split(":")[1]):parseInt(r[i][0].split(":")[0],10)>parseInt(r[i][1].split(":")[0],10)&&(s=!0,r[i][1]=String(parseInt(r[i][1].split(":")[0],10)+12)+":"+r[i][1].split(":")[1]);for(l in a)a[l]={name:n[l],start:r[l][0],end:r[l][1]};return a},a.getAlternateSchedule=function(e){var t=a.filterEventsByDate(e);return a.findAlternate(t)},a.filterEventsByDate=function(e){var t=0,n=[];for(var r in a.props.appState.events){var l=(a.props.appState.events[r].start.date||a.props.appState.events[r].start.dateTime.split("T")[0]).split("-");l=new Date(l[0],l[1]-1,l[2]),a.sameDay(l,e)&&(n[t]=a.props.appState.events[r],t++)}return n},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.dateUpdateInt=setInterval(function(){return e.setState({now:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.dateUpdateInt)}},{key:"render",value:function(){return!1===this.props.isMobile?r.a.createElement("h4",{className:"m-3"},this.handleClass(),r.a.createElement("div",null,r.a.createElement("span",{className:"assign-badge lightblue"},"3")," assignments due today")):r.a.createElement("h4",{className:"mobile-desc"},this.handleClass(),r.a.createElement("div",null,r.a.createElement("span",{className:"assign-badge lightblue"},"3")," assignments due today"))}},{key:"isPlural",value:function(e){return 1!==e?"s":""}},{key:"getClassColor",value:function(e){return null!=p.periodToColor[e]?p.periodToColor[e]:p.periodToColor.Other}},{key:"findAlternate",value:function(e){for(var t in e)for(var a in e[t].summary.split(" "))if(p.keywords.indexOf(e[t].summary.split(" ")[a].toLowerCase())>=0)return e[t];return null}},{key:"sameDay",value:function(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={completed:!1},a.getCompletion=function(){return a.props.config.completed?"COMPLETE":"NOT DONE"},a.getClassDue=function(){return"Non school"===a.props.config.classDue?"":a.props.config.classDue},a.getDateDue=function(){return"Coming Soon"},a.complete=function(){a.setState({completed:!0})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"upcoming-card-div"},r.a.createElement("div",{className:"upcoming-div lightblue"},r.a.createElement("p",{className:"card-name"},this.props.config.name),r.a.createElement("p",{className:"card-done"},r.a.createElement("span",{className:"badge badge-warning text-white"},this.getCompletion())),r.a.createElement("p",{className:"card-due-class"},"Due ",r.a.createElement("span",{className:"class-badge purple"},this.getClassDue())),r.a.createElement("p",{className:"card-due-date"},this.getDateDue())),this.completeDiv())}},{key:"completeDiv",value:function(){return this.state.completed?r.a.createElement("div",{className:"finish-div badge-warning"},r.a.createElement("button",{className:"close center-exit",onClick:this.complete},r.a.createElement("img",{className:"sched-set btn-outline-warning glyph-icon",alt:"finish",src:"assets/si-glyph-delete.svg"}))):r.a.createElement("div",{className:"finish-div badge-success"},r.a.createElement("button",{className:"close center-exit",onClick:this.complete},r.a.createElement("img",{className:"sched-set btn-outline-success glyph-icon",alt:"finish",src:"assets/si-glyph-checked.svg"})))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleUpcoming=function(){for(var e=a.props.appState.upcoming,t=[],n=0;n<e.length;n++)t.push(r.a.createElement(b,{config:e[n],key:"Upcoming "+n}));return 0===t.length?"All Tasks Completed.":t},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"heading-div"},r.a.createElement("h2",{className:"heading-float-left"},"Upcoming"),r.a.createElement("div",{className:"heading-float-right"},r.a.createElement("img",{className:"btn-outline-secondary glyph-icon m-1",alt:"addEvent",src:"assets/si-glyph-circle-plus.svg","data-toggle":"modal","data-target":"#upcomingModal"}))),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"heading-div"},this.handleUpcoming())))}}]),t}(n.Component);a(18);function C(e,t){return new Date(e.start.dateTime||e.start.date).getTime()-new Date(t.start.dateTime||t.start.date).getTime()}function D(e){return void 0!==e?e.replace(/<(?:.|\n)*?>/gm,"").split(",").join("").split(") ").join(")"):""}var S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={classNames:{"Period A":"Period A","Period B":"Period B","Period C":"Period C","Period D":"Period D","Period E":"Period E","Period F":"Period F","Period G":"Period G"},name:"Anonymous Cow",events:{},upcoming:[{name:"HW 3",classDue:"Period E",completed:!1,dueDate:new Date}]},a.handleSave=function(e){a.setState({classNames:e.classNames}),a.setState({name:e.name})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("state"));null!==t?this.setState(t):this.getEvents({calendarUrl:"https://www.googleapis.com/calendar/v3/calendars/u5mgb2vlddfj70d7frf3r015h0@group.calendar.google.com/events?key=AIzaSyDtCp1eV5JlY_Smx8wNbXKngun9HZ5J9Ik",recurringEvents:!0,timeMin:p.firstDay,timeMax:p.lastDay}),window.addEventListener("beforeunload",function(t){localStorage.setItem("state",JSON.stringify(e.state)),clearInterval()})}},{key:"getEvents",value:function(e){var t=this,a=e.calendarUrl;e.recurringEvents&&(a+="&singleEvents=true&orderBy=starttime"),e.timeMin&&(a=a+"&timeMin="+e.timeMin),e.timeMax&&(a=a+"&timeMax="+e.timeMax),fetch(a).then(function(e){return e.json()}).then(function(e){var a=function(e,t){return function(e){var t,a=[];for(t in e){var n=e[t],r={summary:n.summary,description:D(n.description),start:n.start,end:n.end};a[t]=r}return a}(e.items.filter(function(e){return e&&e.hasOwnProperty("status")&&"cancelled"!==e.status}).sort(C))}(e);t.setState({events:a})})}},{key:"render",value:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=600?r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"bg-image"}),r.a.createElement("div",{className:"mobile-panel"},r.a.createElement(u,null),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"switch-hr"},r.a.createElement("hr",{className:"horizontal-rule"})),r.a.createElement(N,{appState:this.state,isMobile:!0}),r.a.createElement(g,{appState:this.state}),r.a.createElement(P,{appState:this.state})))),r.a.createElement(v,{onSave:this.handleSave}),r.a.createElement(y,null)):r.a.createElement("div",null,r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"bg-image"}),r.a.createElement("h2",{className:"name-header m-3"},"Hey there, ",this.state.name,"."),r.a.createElement("div",{className:"today-info"},r.a.createElement("h3",{className:"m-3"},"It's ",p.dayNames[(new Date).getDay()],", ",p.monthNames[(new Date).getMonth()]," ",(new Date).getDate()),r.a.createElement(N,{appState:this.state,isMobile:!1})),r.a.createElement("div",{className:"hover-div"},r.a.createElement("div",{className:"movement-div"},r.a.createElement("div",{className:"schedule-panel"},r.a.createElement(u,null),r.a.createElement("div",{className:"non-header"},r.a.createElement("div",{className:"switch-hr"},r.a.createElement("hr",{className:"horizontal-rule"})),r.a.createElement(g,{appState:this.state}),r.a.createElement(P,{appState:this.state})))))),r.a.createElement(v,{onSave:this.handleSave}),r.a.createElement(y,null))}}]),t}(n.Component);s.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.16bf6bca.chunk.js.map