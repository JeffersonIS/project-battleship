(this["webpackJsonpsemester-project-battleship"]=this["webpackJsonpsemester-project-battleship"]||[]).push([[0],{33:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(21),o=a.n(r),c=a(9),i=a(12),l=a(3),u=a(14),h=a(13),d=(a(4),a(0));var b=function(e){var t,a,s;return"player1"===e.currentPlayer?(t="p1",a=e.currentPlayer,s="Player 1: "):(t="p2",a=e.currentPlayer,s="Player 2: "),Object(d.jsxs)("div",{className:"center landing column",style:{border:"none"},children:[Object(d.jsx)("p",{className:"landing-error",children:e.errorMessage}),Object(d.jsx)("label",{children:Object(d.jsx)("strong",{children:s})}),Object(d.jsx)("input",{id:t,type:"text",placeholder:"enter name",name:a,onBlur:e.onBlur}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:"Instructions:"}),Object(d.jsxs)("p",{children:["Hover over the map and click the square where you want to place your boat. ",Object(d.jsx)("i",{children:"Make sure the other player does not peak!"})]}),Object(d.jsx)("p",{children:"You can clear your boats if you want to re-position them."}),Object(d.jsx)("p",{children:" Use the vertical/horizontal selector to place your boat either veritcally or horizontally."}),Object(d.jsx)("p",{children:"Click 'Next Player' for the next player to set their boats, then PLAY!"})]})},y=function e(t,a,s){Object(c.a)(this,e),this.status=t,this.boatLength=a,this.classlist=s},j=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"empty",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["square"];Object(c.a)(this,e),this.status=t,this.boatLength=a,this.classlist=s};var v=function(e){var t,a,s,n="square".concat(e.coords);if(e.square.boatLength){if((s=e.square.classlist).length>0){t="";for(var r=0;r<s.length;r++)t+="".concat(s[r]," ")}return Object(d.jsx)("div",{className:t,id:n,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,coords:e.coords,onClick:e.onClick})}return a=e.square.classlist[0],Object(d.jsx)("div",{className:a,id:n,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,coords:e.coords,onClick:e.onClick})},p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.boardArray.map((function(t,a){return Object(d.jsx)("div",{className:"board-row",children:t.map((function(t,s){return Object(d.jsx)(v,{onMouseOver:e.props.onMouseOver,onMouseOut:e.props.onMouseOut,square:t,coords:[a,s],onClick:e.props.onClick},s)}))},a)}));return Object(d.jsx)("div",{className:"center",children:Object(d.jsx)("div",{className:"board-container",children:t})})}}]),a}(n.a.Component);var m=function(e){return Object(d.jsxs)("div",{className:"setup-options-container",children:[Object(d.jsxs)("div",{className:"radio-toolbar",children:[Object(d.jsx)("input",{type:"radio",name:"axis-placement",id:"vertical-axis",value:"vertical",defaultChecked:!0,onClick:e.axisPlacementClick}),Object(d.jsx)("label",{htmlFor:"vertical-axis",children:"Vertical"}),Object(d.jsx)("input",{type:"radio",name:"axis-placement",id:"horizontal-axis",value:"horizontal",onClick:e.axisPlacementClick}),Object(d.jsx)("label",{htmlFor:"horizonal-axis",children:"Horizontal"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"btn btn-clear-boats",onClick:e.resetClick,children:"Clear Boats"}),Object(d.jsx)("button",{className:"btn btn-play",onClick:e.buttonEvent,children:e.buttonMessage})]})]})};var O=function(e){return Object(d.jsxs)("span",{className:e.classList,onClick:e.onClick,boatlength:e.boat.length,id:e.id,children:[Object(d.jsxs)("svg",{boatlength:e.boatlength,xmlns:"http://www.w3.org/2000/svg",height:"30",width:"30",viewBox:"0 0 24 24",children:[Object(d.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(d.jsx)("path",{boatlength:e.boatlength,d:"M11,13.5V2L3,13.5H11z M21,13.5C21,6.5,14.5,1,12.5,1c0,0,1,3,1,6.5s-1,6-1,6H21z M22,15H2c0.31,1.53,1.16,2.84,2.33,3.73 C4.98,18.46,5.55,18.01,6,17.5C6.73,18.34,7.8,19,9,19s2.27-0.66,3-1.5c0.73,0.84,1.8,1.5,3,1.5s2.26-0.66,3-1.5 c0.45,0.51,1.02,0.96,1.67,1.23C20.84,17.84,21.69,16.53,22,15z M22,23v-2h-1c-1.04,0-2.08-0.35-3-1c-1.83,1.3-4.17,1.3-6,0 c-1.83,1.3-4.17,1.3-6,0c-0.91,0.65-1.96,1-3,1H2l0,2h1c1.03,0,2.05-0.25,3-0.75c1.89,1,4.11,1,6,0c1.89,1,4.11,1,6,0h0 c0.95,0.5,1.97,0.75,3,0.75H22z"})]}),e.boat.length]})};var g=function(e){var t=e.boatsArray.map((function(t,a){var s="".concat(t.name,"-selector"),n="boat-selector-item boat-selector-".concat(t.status);return Object(d.jsx)(O,{classList:n,onClick:e.onClick,boatlength:t.length,id:s,length:t.length,boat:t},t.name)}));return Object(d.jsxs)("div",{className:"boat-selector-container",children:[Object(d.jsx)(m,{axisPlacementClick:e.axisPlacementClick,resetClick:e.resetClick,buttonEvent:e.buttonEvent,buttonMessage:e.buttonMessage}),Object(d.jsx)("div",{children:t})]})},f=a(2);var x=function(e){var t,a,s,n=Object(f.f)();return"setup"===e.player1.status?(t=e.player1,a="Next Player",s=e.advanceToNextPlayer):"setup"===e.player2.status?(t=e.player2,a="Play",s=e.advanceToPlay):(t=e.player1,n.push("/play")),Object(d.jsxs)("div",{className:"center column",style:{border:"none"},children:[Object(d.jsx)(g,{boatsArray:t.boats,onClick:e.boatSelectorClick,axisPlacementClick:e.axisPlacementClick,resetClick:e.resetClick,buttonEvent:s,buttonMessage:a}),Object(d.jsx)("br",{}),Object(d.jsx)(p,{boardArray:t.board,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut,onClick:e.squareSelectorClick}),Object(d.jsx)("br",{})]})};var P=function(e){var t=e.boats.map((function(e){var t="boat-status-bar-item boat-selector-".concat(e.status);return Object(d.jsx)(O,{boat:e,classList:t},e.name)}));return Object(d.jsx)("div",{className:"boat-status-bar",children:t})};var k=function(e){return Object(d.jsx)("div",{className:"player-message",children:e.message})},C="miss";var S=function(e){var t,a="",s="square".concat(e.coords),n=e.square;return t="hit"===n.status||n.status===C||"sunk"===n.status?"".concat(n.classlist[0]," ").concat(n.classlist[1]):n.classlist[0],n.status===C&&(a="x"),Object(d.jsx)("div",{id:s,className:t,coords:e.coords,onClick:e.onClick,children:a})};var N=function(e){var t=e.board.map((function(t,a){return Object(d.jsx)("div",{className:"board-row",children:t.map((function(t,s){return Object(d.jsx)(S,{square:t,coords:[a,s],overlay:e.overlay,onClick:e.guessClick},s)}))},a)}));return Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"board-container",children:[t,Object(d.jsx)("div",{className:e.overlay,children:Object(d.jsx)("div",{className:"player-overlay-text",children:e.overlayText})})]})})};var B=function(e){var t,a,s,n=e.player.numGuesses,r=e.player.numHits,o=n-r,c=e.player.boatsSunk.size;return a=r>0?"green":"red",s=(t=0===n?0:Math.round(r/n*100))>45?"rgb(0, 192, 0)":t>20?"orange":"red",Object(d.jsxs)("div",{className:"game-stats-container",children:[Object(d.jsxs)("span",{className:"game-stat-item",children:["Hits: ",Object(d.jsx)("span",{style:{color:"".concat(a)},children:r}),"/",21]}),Object(d.jsxs)("span",{className:"game-stat-item",children:["Misses: ",o]}),Object(d.jsxs)("span",{className:"game-stat-item",children:["Hit Percentage: ",Object(d.jsx)("span",{style:{color:"".concat(s)},children:t}),"%"]}),Object(d.jsxs)("span",{className:"game-stat-item",children:["Sinks: ",c]})]})};var H=function(e){var t,a,s;return e.currentPlayer===e.player.id?(t="player-overlay",a="Wait for next player's move."):(t="",a=""),s="player1"===e.player.id?e.player2Name:e.player1Name,Object(d.jsxs)("div",{style:{position:"relative"},children:[Object(d.jsx)("div",{className:"player-name-tag",children:s}),Object(d.jsx)(k,{message:e.player.otherPlayerMessage}),Object(d.jsx)(P,{boats:e.player.boats}),Object(d.jsx)(N,{board:e.player.board,overlay:t,guessClick:e.guessClick,overlayText:a,player:e.player}),Object(d.jsx)(B,{player:e.player})]})};var M=function(e){var t=[e.player2,e.player1].map((function(t,a){return Object(d.jsx)("div",{class:"column",children:Object(d.jsx)(H,{player:t,currentPlayer:e.currentPlayer,guessClick:e.guessClick,player1Name:e.player1Name,player2Name:e.player2Name})},a)}));return Object(d.jsx)("div",{class:"row center",children:t})};var w=function(e){return Object(d.jsx)("div",{className:"winner-overlay",style:{display:"".concat(e.displayWinner)},children:Object(d.jsxs)("div",{className:"winner-overlay-text center",children:[e.winnerText,Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{fontSize:"26px",paddingTop:"1em"},children:"YOU WON!"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn btn-reset",onClick:function(){window.history.pushState({},"","/"),window.location.reload()},children:"Restart Game"})]})})},A=a(17),T="setup",E="square",q="player1",G="player2",L="none",z="vertical",W="afloat",I="sunk",Y="playing";function R(){for(var e=[],t=0;t<10;t++)e.push(Array(10).fill(new j(L,0,[E])));return e}var J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={status:T,player1:{id:q,name:"",board:R(),boats:[{name:"boat1",length:1,coordinates:[],status:"active",numHits:0},{name:"boat2",length:2,coordinates:[],status:"",numHits:0},{name:"boat3",length:3,coordinates:[],status:"",numHits:0},{name:"boat4",length:4,coordinates:[],status:"",numHits:0},{name:"boat5",length:5,coordinates:[],status:"",numHits:0},{name:"boat6",length:6,coordinates:[],status:"",numHits:0}],status:T,otherPlayerMessage:"",boatsSunk:new Set,numGuesses:0,numHits:0},player2:{id:G,name:"",board:R(),boats:[{name:"boat1",length:1,coordinates:[],status:"active",numHits:0},{name:"boat2",length:2,coordinates:[],status:"",numHits:0},{name:"boat3",length:3,coordinates:[],status:"",numHits:0},{name:"boat4",length:4,coordinates:[],status:"",numHits:0},{name:"boat5",length:5,coordinates:[],status:"",numHits:0},{name:"boat6",length:6,coordinates:[],status:"",numHits:0}],status:T,otherPlayerMessage:"Your turn first! Sink their ships.",boatsSunk:new Set,numGuesses:0,numHits:0},boatBeingPlacedLength:1,placementAxis:z,currentPlayer:q,tempboatCoords:[],boatsAlreadyPlaced:new Set,errorMessage:"",displayWinner:"none",winnerText:""},s.handleStartSetup=s.handleStartSetup.bind(Object(l.a)(s)),s.handleAdvanceToSetup=s.handleAdvanceToSetup.bind(Object(l.a)(s)),s.handlePlaceBoatHover=s.handlePlaceBoatHover.bind(Object(l.a)(s)),s.handlePlaceBoatHoverOut=s.handlePlaceBoatHoverOut.bind(Object(l.a)(s)),s.handlePlaceBoatClick=s.handlePlaceBoatClick.bind(Object(l.a)(s)),s.handleSetBoatToPlace=s.handleSetBoatToPlace.bind(Object(l.a)(s)),s.handleAxisPlacementChange=s.handleAxisPlacementChange.bind(Object(l.a)(s)),s.getSquareElement=s.getSquareElement.bind(Object(l.a)(s)),s.updateBoard=s.updateBoard.bind(Object(l.a)(s)),s.updateBoats=s.updateBoats.bind(Object(l.a)(s)),s.handleResetSetup=s.handleResetSetup.bind(Object(l.a)(s)),s.handleAdvanceToPlay=s.handleAdvanceToPlay.bind(Object(l.a)(s)),s.handleAdvanceToNextPlayer=s.handleAdvanceToNextPlayer.bind(Object(l.a)(s)),s.handleGuessClick=s.handleGuessClick.bind(Object(l.a)(s)),s.getCoords=s.getCoords.bind(Object(l.a)(s)),s.checkGoodToPlaceHover=s.checkGoodToPlaceHover.bind(Object(l.a)(s)),s.checkGoodToPlaceClick=s.checkGoodToPlaceClick.bind(Object(l.a)(s)),s.handleAdvancePlayer=s.handleAdvancePlayer.bind(Object(l.a)(s)),s.checkName=s.checkName.bind(Object(l.a)(s)),s}return Object(i.a)(a,[{key:"checkGoodToPlaceHover",value:function(e,t){var a=!0;return e.forEach((function(e){e.coordinates.length>0&&e.coordinates.forEach((function(e){t[0]===e[0]&&t[1]===e[1]&&(a=!1)}))})),a}},{key:"checkGoodToPlaceClick",value:function(e,t){var a=!0;return t.forEach((function(t){var s=t[0],n=t[1];e.forEach((function(e){e.coordinates.forEach((function(e){e[0]===s&&e[1]===n&&(a=!1)}))}))})),a}},{key:"checkName",value:function(){var e;if(void 0===(e=this.state.currentPlayer===q?this.state.player1.name:this.state.player2.name)||""===e){var t="Please enter a name for ".concat(this.state.currentPlayer);return this.setState({errorMessage:t}),!1}return!0}},{key:"getSquareElement",value:function(e){var t=e.target.attributes.id.value;return document.getElementById(t)}},{key:"getCoords",value:function(e){var t=this.getSquareElement(e).attributes.coords.value.split(",");if(!(t.length<1))return t=[Number(t[0]),Number(t[1])];this.setState({errorMessage:"the coordinates for the square were not retrieved in handlePlaceBoatHover function in Game element"})}},{key:"handleStartSetup",value:function(e){var t=e.target.value;if(void 0!==t&&""!==t){this.setState({errorMessage:""}),"p1"===e.target.id?this.setState((function(e){var a=Object.assign({},e.player1);return a.name=t,{player1:a}})):this.setState((function(e){var a=Object.assign({},e.player2);return a.name=t,{player2:a}}))}else{var a="Please enter a name for ".concat(this.state.currentPlayer);this.setState({errorMessage:a})}}},{key:"handleAdvancePlayer",value:function(){this.state.currentPlayer===q?this.setState({currentPlayer:G}):this.setState({currentPlayer:q})}},{key:"handleAdvanceToSetup",value:function(){if(""!==this.state.player1.name&&""!==this.state.player2.name){this.setState((function(){return{status:"setup"}}))}}},{key:"handleAdvanceToPlay",value:function(){if(this.checkName())if(this.state.boatsAlreadyPlaced.size<6)this.setState({errorMessage:"".concat(this.state.currentPlayer," has not set all of their boats yet")});else{this.setState((function(e){var t=Object.assign({},e.player2);return t.status=Y,{player2:t}}));this.setState((function(){return{status:"playing"}})),this.handleAdvancePlayer()}else{var e="Please enter a name for ".concat(this.state.currentPlayer);this.setState({errorMessage:e})}}},{key:"handleAdvanceToNextPlayer",value:function(){if(this.checkName())this.state.boatsAlreadyPlaced.size<6?this.setState({errorMessage:"".concat(this.state.currentPlayer," has not set all of their boats yet")}):(this.state.currentPlayer===q&&this.setState((function(e){var t=Object.assign({},e.player1);return t.status=Y,{player1:t}})),this.handleAdvancePlayer(),this.setState({tempboatCoords:[]}),this.setState({boatsAlreadyPlaced:new Set}),this.setState({boatBeingPlacedLength:1}));else{var e="Please enter a name for ".concat(this.state.currentPlayer);this.setState({errorMessage:e})}}},{key:"handlePlaceBoatHover",value:function(e){var t,a,s=this,n=this.state.currentPlayer,r=this.getCoords(e),o=[];n===q?(t=this.state.player1.board,a=this.state.player1.boats):n===G?(t=this.state.player2.board,a=this.state.player2.boats):this.setState({errorMessage:"player not valid. HandlePlaceBoatHoverfunction."}),""===this.state.placementAxis||this.state.boatBeingPlaced;var c=this.state.boatBeingPlacedLength;if(this.state.boatsAlreadyPlaced.has(c))console.log("boat of length ",c,"already placed.");else if(this.checkGoodToPlaceHover(a,r)){if(this.state.placementAxis===z){if(10-r[0]<c)return void console.log("not a good boat");o.push(r);for(var i=1;i<c;i++){var l=[r[0]+i,r[1]];o.push(l)}}else if("horizontal"===this.state.placementAxis){if(10-r[1]<c)return void console.log("not a good boat");o.push(r);for(var u=1;u<c;u++){var h=[r[0],r[1]+u];o.push(h)}}var d=!0;o.forEach((function(e){t[e[0]][e[1]].status===W&&(d=!1)})),d&&o.forEach((function(e){t[e[0]][e[1]]=new y("hover",s.state.boatBeingPlacedLength,[E,"square-hover"])})),this.setState((function(){return{tempboatCoords:o}})),this.updateBoard(t)}else this.setState((function(){return{tempboatCoords:[]}}))}},{key:"handlePlaceBoatHoverOut",value:function(e){var t;t=this.state.currentPlayer===q?this.state.player1.board:this.state.player2.board,this.state.tempboatCoords.forEach((function(e){t[e[0]][e[1]].status!==W&&(t[e[0]][e[1]]=new j(L,0,[E]))})),this.updateBoard(t)}},{key:"handlePlaceBoatClick",value:function(e){var t,a,s=this,n=this.state.tempboatCoords,r=this.state.boatBeingPlacedLength,o=this.state.boatsAlreadyPlaced;this.getCoords(e);if(n.length===r&&(n.length>0&&(this.state.currentPlayer===q?(t=this.state.player1.board,a=this.state.player1.boats):(t=this.state.player2.board,a=this.state.player2.boats),this.checkGoodToPlaceClick(a,n)))){n.forEach((function(e){t[e[0]][e[1]].status!==W&&(t[e[0]][e[1]]=new y(W,s.state.boatBeingPlacedLength,[E,"square-active"]))})),a.forEach((function(e){e.length===r&&(e.coordinates=n,e.status=W)})),o.has(r)||o.add(r);for(var c=6;c>0;c--)o.has(c)||this.handleSetBoatToPlace(c);this.updateBoard(t),this.updateBoats(a)}}},{key:"handleGuessClick",value:function(e){var t,a,s,n,r,o,c,i,l,u=this.getCoords(e);this.state.currentPlayer===q?(t=this.state.player1.id,l=this.state.player1.name,a=this.state.player2.board,s=this.state.player2.boats,n=this.state.player2.boatsSunk,c=this.state.player2.numGuesses,i=this.state.player2.numHits):(t=this.state.player2.id,l=this.state.player2.name,a=this.state.player1.board,s=this.state.player1.boats,n=this.state.player1.boatsSunk,c=this.state.player1.numGuesses,i=this.state.player1.numHits);var h,d,b=a[u[0]][u[1]];if(c+=1,b.status===W){if((d=b.boatLength)>0&&(h=s[d-1]),h.numHits+=1,i+=1,h.numHits===d){h.coordinates.forEach((function(e){a[e[0]][e[1]]=new y(I,d,[E,"square-sunk"])})),h.status=I,o="You sunk their ship #".concat(d,"!!"),n.has(d)||n.add(d),r=!0;for(var v=1;v<7;v++)n.has(v)||(r=!1)}else a[u[0]][u[1]]=new y("hit",d,[E,"square-hit"]),h.status="hit",o="Nice hit on boat #".concat(d,"!! Good guessing.");s[d-1]=h}else b.status===L&&(a[u[0]][u[1]]=new j("miss",d,[E,"square-miss"]),o="You missed. Better luck next time:)");if(r&&(console.log("WINNER! ",t),o="NICE JOB!! YOU WON!!!!!"),this.state.currentPlayer===q?this.setState((function(e){var t=Object.assign({},e.player2);return t.board=a,t.boats=s,t.boatsSunk=n,t.otherPlayerMessage=o,t.numGuesses=c,t.numHits=i,{player2:t}})):this.setState((function(e){var t=Object.assign({},e.player1);return t.board=a,t.boats=s,t.boatsSunk=n,t.otherPlayerMessage=o,t.numGuesses=c,t.numHits=i,{player1:t}})),r){console.log(r);var p="Congratulations ".concat(l,"!");this.setState({displayWinner:"block"}),this.setState({winnerText:p})}this.handleAdvancePlayer()}},{key:"handleSetBoatToPlace",value:function(e){var t;if(isNaN(e)){var a=e.target.attributes;a.length>1&&(t=Number(a.boatlength.value))}else t=Number(e);this.setState((function(){return{boatBeingPlacedLength:t}})),document.getElementById("boat".concat(t,"-selector")).classList.add("boat-selector-active");for(var s=1;s<7;s++)if(s!==t){var n=document.getElementById("boat".concat(s,"-selector"));n&&n.classList&&n.classList.remove("boat-selector-active")}}},{key:"handleAxisPlacementChange",value:function(e){var t=e.target.attributes.value.value;this.setState((function(){return{placementAxis:t}}))}},{key:"handleResetSetup",value:function(){var e=R(),t=[{name:"boat1",length:1,coordinates:[],status:"active",numHits:0},{name:"boat2",length:2,coordinates:[],status:"",numHits:0},{name:"boat3",length:3,coordinates:[],status:"",numHits:0},{name:"boat4",length:4,coordinates:[],status:"",numHits:0},{name:"boat5",length:5,coordinates:[],status:"",numHits:0},{name:"boat6",length:6,coordinates:[],status:"",numHits:0}];this.setState({tempboatCoords:[]}),this.setState({boatBeingPlacedLength:1}),this.setState({boatsAlreadyPlaced:new Set}),this.updateBoard(e),this.updateBoats(t),this.setState({errorMessage:""})}},{key:"updateBoard",value:function(e){this.state.currentPlayer===q?this.setState((function(t){var a=Object.assign({},t.player1);return a.board=e,{player1:a}})):this.state.currentPlayer===G&&this.setState((function(t){var a=Object.assign({},t.player2);return a.board=e,{player2:a}}))}},{key:"updateBoats",value:function(e){this.state.currentPlayer===q?this.setState((function(t){var a=Object.assign({},t.player1);return a.boats=e,{player1:a}})):this.state.currentPlayer===G&&this.setState((function(t){var a=Object.assign({},t.player2);return a.boats=e,{player2:a}}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"game-container",children:Object(d.jsx)(A.a,{children:Object(d.jsxs)(f.c,{children:[Object(d.jsxs)(f.a,{path:"/play",children:[Object(d.jsx)(M,{player1:this.state.player1,player2:this.state.player2,player2Name:this.state.player2.name,player1Name:this.state.player1.name,currentPlayer:this.state.currentPlayer,guessClick:function(t){e.handleGuessClick(t)}}),Object(d.jsx)(w,{displayWinner:this.state.displayWinner,winnerText:this.state.winnerText})]}),Object(d.jsx)(f.a,{path:"/",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(b,{onBlur:this.handleStartSetup,currentPlayer:this.state.currentPlayer,onClick:this.handleAdvanceToSetup,errorMessage:this.state.errorMessage}),Object(d.jsx)(x,{player1:this.state.player1,player2:this.state.player2,onMouseOver:function(t){e.handlePlaceBoatHover(t)},onMouseOut:function(t){e.handlePlaceBoatHoverOut(t)},boatSelectorClick:function(t){e.handleSetBoatToPlace(t)},axisPlacementClick:function(t){e.handleAxisPlacementChange(t)},squareSelectorClick:function(t){e.handlePlaceBoatClick(t)},resetClick:this.handleResetSetup,advanceToPlay:this.handleAdvanceToPlay,advanceToNextPlayer:this.handleAdvanceToNextPlayer})]})})]})})})}}]),a}(n.a.Component);var U=function(){return Object(d.jsx)("div",{className:"header",children:" - Battleship - "})};var F=function(e){return Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{children:"Built by Jefferson Ostler"}),Object(d.jsxs)("div",{className:"footer-item-container",children:[Object(d.jsx)("span",{className:"footer-item",children:"React.js"}),Object(d.jsx)("a",{className:"footer-item",href:"https://www.jeffersonostler.com",target:"_blank",children:"jeffersonostler.com"}),Object(d.jsx)("span",{className:"footer-item",children:"BYU MISM"})]})]})})};var V=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(U,{}),Object(d.jsx)(J,{}),Object(d.jsx)(F,{})]})};o.a.render(Object(d.jsx)(V,{}),document.getElementById("root"))},4:function(e,t,a){}},[[33,1,2]]]);
//# sourceMappingURL=main.14b7cdfd.chunk.js.map