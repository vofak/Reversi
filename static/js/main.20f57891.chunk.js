(this.webpackJsonpreversi=this.webpackJsonpreversi||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/tick.8ac3076e.mp3"},function(e,t,a){e.exports=a.p+"static/media/bell.963560d5.mp3"},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),s=(a(16),a(1)),l=a(2),c=a(4),u=a(3),h=(a(17),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(s.a)(this,a),(r=t.call(this,e,n)).state={victories:0},r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=localStorage.getItem("gamesPlayed");e||(e="0");var t=localStorage.getItem("victories");t||(t="0");var a=localStorage.getItem("piecesReversed");a||(a="0");var n,r,i=JSON.parse(localStorage.getItem("players")),o=0;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];l>o&&(n=s,o=l)}r=n?"".concat(n," (").concat(o,")"):"-",this.setState({victories:Number(t),gamesPlayed:Number(e),piecesReversed:Number(a),mostPlayed:r})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Stats"},r.a.createElement("h2",null,"Stats"),r.a.createElement("p",null,"Games Played: ",this.state.gamesPlayed),r.a.createElement("p",null,"Won: ",this.state.victories),r.a.createElement("p",null,"Pieces Reversed: ",this.state.piecesReversed),r.a.createElement("p",null,"Most played: ",this.state.mostPlayed))}}]),a}(r.a.Component)),d=(a(18),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(s.a)(this,a),(r=t.call(this,e,n)).handleNewGameClick=function(){r.props.handleNewGameClick()},r.handleStatsClick=function(){r.props.handleStatsClick()},r.state={newGameEnabled:!1},r}return Object(l.a)(a,[{key:"setNewGameEnabled",value:function(e){this.setState({newGameEnabled:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Menu"},r.a.createElement("button",{onClick:this.handleNewGameClick,disabled:!this.state.newGameEnabled},"New game"),r.a.createElement("button",{onClick:this.handleStatsClick},"Stats"),r.a.createElement("label",{className:"OfflineIndicator"},"Offline"))}}]),a}(r.a.Component)),v=(a(19),Object.freeze({random:{name:"Random Player"},hungry:{name:"Hungry Player"},simple:{name:"Simple Player"},strong:{name:"Strong Player"}})),m=Object.freeze({empty:1,white:2,black:3}),f=Object.freeze({white:{piece:m.white,name:"White Player"},black:{piece:m.black,name:"Black Player"}}),p=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var i;return Object(s.a)(this,a),(i=t.call(this,e,n)).handleClick=function(e){e.shiftKey?i.clearCanvas():e.ctrlKey||!i.currPath?i.startNewPath(e.nativeEvent.offsetX,e.nativeEvent.offsetY):i.extendCurrPath(e.nativeEvent.offsetX,e.nativeEvent.offsetY)},i.currPath=null,i.canvas=r.a.createRef(),i.empty=!0,i.state={picture:{points:[],paths:[],color:"black"}},i}return Object(l.a)(a,[{key:"getSvgData",value:function(){return this.state.picture}},{key:"clearCanvas",value:function(){this.currPath=null,this.canvas.current.innerHTML="",this.empty=!0,this.state={picture:{points:[],paths:[],color:"black"}}}},{key:"setColor",value:function(e){var t=this.state.picture;t.color=e,this.setState({picture:t})}},{key:"startNewPath",value:function(e,t){var a=this.state.picture;this.currPath||(this.currPath=document.createElementNS("http://www.w3.org/2000/svg","path"),this.currPath.setAttributeNS(null,"stroke","black"),this.currPath.setAttributeNS(null,"stroke-width","5"),this.currPath.setAttributeNS(null,"fill","transparent"),this.currPath.setAttributeNS(null,"d",""),this.canvas.current.appendChild(this.currPath),a.paths.push({x:e,y:t,r:"5",fill:"transparent",strokeWidth:"5",d:""}));var n=this.currPath.getAttributeNS(null,"d");n+="M ".concat(e," ").concat(t," "),this.currPath.setAttributeNS(null,"d",n);var r=a.paths[a.paths.length-1];r.d+="M ".concat(e," ").concat(t," "),a.paths[a.paths.length-1].d=r.d,this.setState({picture:a}),this.drawPoint(e,t),this.empty=!1}},{key:"extendCurrPath",value:function(e,t){var a=this.currPath.getAttributeNS(null,"d");a+="L ".concat(e," ").concat(t," "),this.currPath.setAttributeNS(null,"d",a);var n=this.state.picture,r=n.paths[n.paths.length-1];r.d+="L ".concat(e," ").concat(t," "),n.paths[n.paths.length-1].d=r.d,this.setState({picture:n}),this.empty=!1}},{key:"drawPoint",value:function(e,t){var a=document.createElementNS("http://www.w3.org/2000/svg","circle");a.setAttributeNS(null,"cx",e),a.setAttributeNS(null,"cy",t),a.setAttributeNS(null,"r","2"),a.setAttributeNS(null,"fill","red"),this.canvas.current.appendChild(a);var n=this.state.picture;n.points.push({x:e,y:t,r:"2",fill:"red"}),this.setState({picture:n})}},{key:"render",value:function(){return r.a.createElement("svg",{viewBox:"0 0 100 100",ref:this.canvas,onClick:this.handleClick})}}]),a}(r.a.Component),g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var i;return Object(s.a)(this,a),(i=t.call(this,e,n)).handleDifficultyChange=function(e){var t=null;switch(e.target.value){case"random":t=v.random;break;case"hungry":t=v.hungry;break;case"simple":t=v.simple;break;default:throw new Error("Unknown difficulty")}i.setState({selectedDifficulty:t})},i.handlePlayerChange=function(e){var t=null;if("white"===e.target.value)t=f.white,i.svgPaint.current.setColor("black");else{if("black"!==e.target.value)throw new Error("Unknown color");t=f.black,i.svgPaint.current.setColor("white")}i.setState({selectedPlayer:t})},i.handleSubmit=function(e){e.preventDefault(),i.props.onStartNewGame(i.state.selectedDifficulty,i.state.selectedPlayer,i.state.image,i.state.name,i.svgPaint.current.empty?null:i.svgPaint.current.getSvgData())},i.handleDrop=function(e){e.preventDefault();var t=e.dataTransfer.files[0];if("image"===t.type.split("/")[0]){var a=new FileReader;a.addEventListener("load",(function(){var e=new Image;e.src=a.result,i.setState({image:e})})),a.readAsDataURL(t)}},i.handleNameChange=function(e){i.setState({name:e.target.value})},i.state={selectedDifficulty:v.random,selectedPlayer:f.white,name:""},i.svgPaint=r.a.createRef(),i}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"NewGame"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"FormSection"},r.a.createElement("input",{type:"text",id:"name",placeholder:"Name",required:!0,autoFocus:!0,autoComplete:"off",onChange:this.handleNameChange})),r.a.createElement("div",{className:"FormSection"},r.a.createElement("input",{type:"radio",id:"random",name:"difficulty",value:"random",checked:this.state.selectedDifficulty===v.random,onChange:this.handleDifficultyChange}),r.a.createElement("label",{htmlFor:"random"},"Random"),r.a.createElement("input",{type:"radio",id:"hungry",name:"difficulty",value:"hungry",checked:this.state.selectedDifficulty===v.hungry,onChange:this.handleDifficultyChange}),r.a.createElement("label",{htmlFor:"hungry"},"Hungry"),r.a.createElement("input",{type:"radio",id:"simple",name:"difficulty",value:"simple",checked:this.state.selectedDifficulty===v.simple,onChange:this.handleDifficultyChange}),r.a.createElement("label",{htmlFor:"simple"},"Simple")),r.a.createElement("div",{className:"FormSection"},r.a.createElement("input",{type:"radio",id:"white",name:"color",value:"white",checked:this.state.selectedPlayer===f.white,onChange:this.handlePlayerChange}),r.a.createElement("label",{htmlFor:"white"},"White"),r.a.createElement("input",{type:"radio",id:"black",name:"color",value:"black",checked:this.state.selectedPlayer===f.black,onChange:this.handlePlayerChange}),r.a.createElement("label",{htmlFor:"black"},"Black"),r.a.createElement("div",{className:"DnD",onDrop:this.handleDrop,onDragOver:function(e){return e.preventDefault()}},this.state.image?"Piece picture selected":"Drop a picture if you like"),r.a.createElement("p",null,"Drag and Drop a picture of something you like so you can play as the picture."),r.a.createElement(p,{ref:this.svgPaint}),r.a.createElement("p",null,"Draw a picture of something you don't like so the opponent plays as that. Left clicks for lines. Left click + shift for clearing the canvas. Left Click + ctrl for starting a new path")),r.a.createElement("footer",null,r.a.createElement("input",{type:"submit",value:"Start Game"}))))}}]),a}(r.a.Component),y=a(5),w=(a(20),a(9)),b=a.n(w),k=a(10),S=a.n(k),P=a(6),E=(a(21),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;return Object(s.a)(this,a),(r=t.call(this,e,n)).handleClick=function(){r.props.onClick(Object(P.a)(r))},r.handleMouseEnter=function(){r.props.onMouseEnter(Object(P.a)(r))},r.onMouseLeave=function(){r.props.onMouseLeave(Object(P.a)(r))},r.state={piece:r.props.piece,move:r.props.move,toReverse:!1},r}return Object(l.a)(a,[{key:"setPiece",value:function(e){this.setState({piece:e})}},{key:"setMove",value:function(e){this.setState({move:e})}},{key:"setToReverse",value:function(e){this.setState({toReverse:e})}},{key:"render",value:function(){var e;return e=this.state.piece===m.empty?"":this.state.piece===m.white?this.getSvgPiece("white"):this.state.piece===m.black?this.getSvgPiece("black"):this.state.piece instanceof Image?this.getImgPiece(this.state.piece):this.getSvgPaintPiece(this.state.piece),r.a.createElement("div",{className:"Square ".concat(this.state.toReverse?"ToReverseSquare":""," ").concat(this.state.move?"MoveSquare":""),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.onMouseLeave},e)}},{key:"getSvgPiece",value:function(e){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"Piece"},r.a.createElement("circle",{r:"50%",cx:"50%",cy:"50%",fill:e}))}},{key:"getImgPiece",value:function(e){return r.a.createElement("div",{className:"Piece"},r.a.createElement("img",{src:e.src,alt:"piece",style:{height:"100%"}}))}},{key:"getSvgPaintPiece",value:function(e){return r.a.createElement("div",{className:"Piece"},r.a.createElement("svg",{viewBox:"0 0 100 100"},e.paths.map((function(t){return r.a.createElement("path",{d:t.d,fill:t.fill,stroke:e.color,strokeWidth:t.strokeWidth})}))))}}]),a}(r.a.Component));var O=function(e){return e===f.white?f.black:f.white},C=function(){function e(){Object(s.a)(this,e),this.grid=[];for(var t=0;t<8;t++){for(var a=[],n=0;n<8;n++)a.push(m.empty);this.grid.push(a)}this.validMoves=null,this.currPlayer=f.white,this.moveNumber=1,this.playerPieceCount=0,this.winner=null}return Object(l.a)(e,[{key:"get",value:function(e,t){return this.grid[e][t]}},{key:"set",value:function(e,t){this.grid[e.rowIndex][e.columnIndex]=t,this.validMoves=null}},{key:"getMoveNumber",value:function(){return this.moveNumber}},{key:"makeMove",value:function(e){if(!this.isValidMove(e.rowIndex,e.columnIndex))throw new Error("The intended move is invalid");this.set(e,this.currPlayer.piece);var t,a=Object(y.a)(e.toReverse);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.set(n,this.currPlayer.piece)}}catch(r){a.e(r)}finally{a.f()}this.currPlayer=O(this.currPlayer),this.getValidMoves().length>0?this.moveNumber++:this.winner=this.findWinner()}},{key:"findWinner",value:function(){for(var e=this.currPlayer,t=O(e),a=0,n=0,r=0;r<8;r++)for(var i=0;i<8;i++){var o=this.get(r,i);o===e.piece?a++:o===t.piece&&n++}return this.playerPieceCount=a,a>n?e:t}},{key:"undoMove",value:function(e){this.set(e,m.empty);var t,a=Object(y.a)(e.toReverse);try{for(a.s();!(t=a.n()).done;){var n=t.value;this.set(n,this.currPlayer.piece)}}catch(r){a.e(r)}finally{a.f()}this.currPlayer=O(this.currPlayer),this.winner=null,this.moveNumber--}},{key:"getValidMoves",value:function(){if(null===this.validMoves){if(!this.currPlayer)return[];for(var e=[],t=0;t<8;++t)for(var a=0;a<8;++a)if(this.grid[t][a]===m.empty){var n=this.getToReverse(this.currPlayer,t,a);n.length>0&&e.push({rowIndex:t,columnIndex:a,toReverse:n})}this.validMoves=e}return this.validMoves}},{key:"isValidMove",value:function(e,t){var a,n=this.getValidMoves(),r=Object(y.a)(n);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.rowIndex===e&&i.columnIndex===t)return!0}}catch(o){r.e(o)}finally{r.f()}return!1}},{key:"getMove",value:function(e,t){var a,n=this.getValidMoves(),r=Object(y.a)(n);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.rowIndex===e&&i.columnIndex===t)return i}}catch(o){r.e(o)}finally{r.f()}return!1}},{key:"getToReverse",value:function(e,t,a){for(var n=[],r=-1;r<=1;++r)for(var i=-1;i<=1;++i)0===r&&0===i||(n=n.concat(this.getToReverseInDirection(e,t,a,r,i)));return n}},{key:"getToReverseInDirection",value:function(e,t,a,n,r){for(var i=[],o=t,s=a;;){if(o+=n,s+=r,!this.isOnBoard(o,s))return[];var l=this.grid[o][s];if(l===m.empty)return[];if(l===e.piece)return i;i.push({rowIndex:o,columnIndex:s})}}},{key:"isOnBoard",value:function(e,t){return e>=0&&e<8&&t>=0&&t<8}}],[{key:"getDefaultInitBoard",value:function(){var t=new e;return t.grid[3][3]=m.black,t.grid[4][4]=m.black,t.grid[4][3]=m.white,t.grid[3][4]=m.white,t.playerPieceCount=2,t}}]),e}(),N=function(){function e(t){Object(s.a)(this,e),this.depth=t||4}return Object(l.a)(e,[{key:"nextMove",value:function(e){return this.negamax(e,this.depth,-1e8,1e8).move}},{key:"negamax",value:function(e,t,a,n){if(0===t||e.winner)return{val:this.evaluateBoard(e)};var r,i=e.getValidMoves(),o=-1e5,s=null,l=Object(y.a)(i);try{for(l.s();!(r=l.n()).done;){var c=r.value;e.makeMove(c);var u=this.negamax(e,t-1,a,n);if(u.val>o&&(o=u.val,s={val:u.val,move:c}),s&&s.val>a&&(a=s.val),a>=n)break;e.undoMove(c)}}catch(h){l.e(h)}finally{l.f()}return s}},{key:"evaluateBoard",value:function(e){throw new Error("You have to implement this function")}}]),e}(),M=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"evaluateBoard",value:function(e){for(var t=0,a=0;a<8;a++)for(var n=0;n<8;n++)e.get(a,n)===e.currPlayer.piece&&t++;return t}}]),a}(N),R=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,[{key:"nextMove",value:function(e){var t=e.getValidMoves();return t[Math.floor(Math.random()*t.length)]}}]),e}(),j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.call(this,1)}return Object(l.a)(a,[{key:"evaluateBoard",value:function(e){for(var t=0,a=0;a<8;a++)for(var n=0;n<8;n++)e.get(a,n)===e.currPlayer.piece&&t++;return t}}]),a}(N),I=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var r;switch(Object(s.a)(this,a),(r=t.call(this,e,n)).makeMove=function(e){var t=r.board.getMove(e.props.rowIndex,e.props.columnIndex);if(t){if(r.board.makeMove(t),r.board.winner)return r.bell.pause(),r.bell.currentTime=0,r.bell.play(),r.updateLocalStorage({winner:r.board.winner,pieceCount:r.board.playerPieceCount,name:r.name}),alert("".concat(r.board.winner.name," won!!!")),void r.props.onGameOver();r.makeOpponentMove(),r.updateBoard(),r.tick.pause(),r.tick.currentTime=0,r.tick.play()}},r.handleMouseEnterSquare=function(e){var t=e.state.move;if(t){var a,n=Object(y.a)(t.toReverse);try{for(n.s();!(a=n.n()).done;){var i=a.value;r.getSquare(i).setToReverse(!0)}}catch(o){n.e(o)}finally{n.f()}}},r.onMouseLeaveSquare=function(e){var t=e.state.move;if(t){var a,n=Object(y.a)(t.toReverse);try{for(n.s();!(a=n.n()).done;){var i=a.value;r.getSquare(i).setToReverse(!1)}}catch(o){n.e(o)}finally{n.f()}}},r.createRefs(),r.board=C.getDefaultInitBoard(),r.player=e.player,r.image=e.image,r.svg=e.svg,r.name=e.name,r.props.difficulty){case v.random:r.opponent=new R;break;case v.hungry:r.opponent=new j;break;case v.simple:r.opponent=new M;break;default:throw new Error("Unknown opponent player")}return r.player!==f.white&&r.makeOpponentMove(),r.props.spaceHeight>r.props.spaceWidth?r.state={boardSize:r.props.spaceWidth}:r.state={boardSize:r.props.spaceHeight},r.tick=new Audio(b.a),r.bell=new Audio(S.a),r}return Object(l.a)(a,[{key:"updateSize",value:function(e,t){e>t?this.setState({boardSize:t}):this.setState({boardSize:e})}},{key:"createRefs",value:function(){for(var e=[],t=0;t<8;t++){for(var a=[],n=0;n<8;n++)a.push(r.a.createRef());e.push(a)}this.squareRefs=e}},{key:"makeOpponentMove",value:function(){var e=this.opponent.nextMove(this.board);this.board.makeMove(e),this.board.winner&&(this.bell.pause(),this.bell.currentTime=0,this.bell.play(),this.updateLocalStorage({winner:this.board.winner,pieceCount:this.board.playerPieceCount,name:this.name}),alert("".concat(this.board.winner.name," won!!!")),this.props.onGameOver())}},{key:"updateBoard",value:function(){for(var e=0;e<8;e++)for(var t=0;t<8;t++){var a=this.board.getMove(e,t),n=this.squareRefs[e][t].current;n.setMove(a),this.board.get(e,t)===this.player.piece&&this.image?n.setPiece(this.image):this.board.get(e,t)===O(this.player).piece&&this.svg?n.setPiece(this.svg):n.setPiece(this.board.get(e,t)),n.setToReverse(!1),n.forceUpdate()}}},{key:"getSquare",value:function(e){return this.squareRefs[e.rowIndex][e.columnIndex].current}},{key:"updateLocalStorage",value:function(e){var t=e.winner===this.player?1:0;localStorage.getItem("victories")||localStorage.setItem("victories",t.toString()),localStorage.setItem("victories",(Number(localStorage.getItem("victories"))+t).toString()),localStorage.getItem("gamesPlayed")||localStorage.setItem("gamesPlayed",t.toString()),localStorage.setItem("gamesPlayed",(Number(localStorage.getItem("gamesPlayed"))+1).toString()),localStorage.getItem("piecesReversed")||localStorage.setItem("piecesReversed",t.toString()),localStorage.setItem("piecesReversed",(Number(localStorage.getItem("piecesReversed"))+e.pieceCount).toString());var a=JSON.parse(localStorage.getItem("players"));a?(a[e.name]||(a[e.name]=0),a[e.name]+=1):(a={})[e.name]=1,localStorage.setItem("players",JSON.stringify(a))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board",style:{width:this.state.boardSize,height:this.state.boardSize}},this.board.grid.map((function(t,a){return t.map((function(t,n){var i;return i=e.board.get(a,n)===e.player.piece&&e.image?e.image:e.board.get(a,n)===O(e.player).piece&&e.svg?e.svg:e.board.get(a,n),r.a.createElement(E,{rowIndex:a,columnIndex:n,ref:e.squareRefs[a][n],piece:i,move:e.board.getMove(a,n),onClick:e.makeMove,onMouseEnter:e.handleMouseEnterSquare,onMouseLeave:e.onMouseLeaveSquare})}))})))}}]),a}(r.a.Component),G=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e,n){var i;return Object(s.a)(this,a),(i=t.call(this,e,n)).handleLineChange=function(){window.navigator.onLine?document.body.classList.remove("Offline"):document.body.classList.add("Offline")},i.handlePopState=function(e){e.state.statsShowing?document.body.classList.add("ModalVisible"):document.body.classList.remove("ModalVisible"),i.setState(e.state)},i.handleResize=function(){if(i.state.inGame){var e=window.innerWidth,t=window.innerHeight;window.innerWidth<=700?t-=100:e-=100,i.gameRef.current.updateSize(t,e)}},i.handleNewGameClick=function(){i.setState({inGame:!1}),i.menuRef.current.setNewGameEnabled(!1),window.history.pushState({inGame:!1,statsShowing:i.state.statsShowing},"app")},i.handleStatsClick=function(){i.setState({statsShowing:!0}),document.body.classList.add("ModalVisible"),window.history.pushState({inGame:i.state.inGame,statsShowing:!0},"app")},i.handleStartNewGame=function(e,t,a,n,r){i.menuRef.current.setNewGameEnabled(!0),i.setState({inGame:!0,difficulty:e,player:t,image:a,name:n,svg:r}),window.history.pushState({inGame:!0,statsShowing:i.state.statsShowing},"app")},i.handleGameOver=function(){i.setState({inGame:!1}),i.menuRef.current.setNewGameEnabled(!1),i.statsRef.current.update(),window.history.pushState({inGame:!1,statsShowing:i.state.statsShowing},"app")},i.handleCloseModalClick=function(){i.setState({statsShowing:!1}),document.body.classList.remove("ModalVisible"),window.history.pushState({inGame:i.state.inGame,statsShowing:!1},"app")},i.menuRef=r.a.createRef(),i.gameRef=r.a.createRef(),i.statsRef=r.a.createRef(),i.state={inGame:!1,statsShowing:!1},window.addEventListener("popstate",i.handlePopState),window.history.replaceState({inGame:i.state.inGame,statsShowing:i.state.statsShowing},"app"),window.addEventListener("offline",i.handleLineChange),window.addEventListener("online",i.handleLineChange),window.navigator.onLine?document.body.classList.remove("Offline"):document.body.classList.add("Offline"),i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=window.innerWidth,t=window.innerHeight;return window.innerWidth<=700?t-=100:e-=100,r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("section",null,this.state.inGame?r.a.createElement(I,{ref:this.gameRef,player:this.state.player,onGameOver:this.handleGameOver,difficulty:this.state.difficulty,image:this.state.image,name:this.state.name,svg:this.state.svg,spaceWidth:e,spaceHeight:t}):r.a.createElement(g,{onStartNewGame:this.handleStartNewGame})),r.a.createElement("nav",null,r.a.createElement(d,{ref:this.menuRef,handleNewGameClick:this.handleNewGameClick,handleStatsClick:this.handleStatsClick}))),r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"ModalContent"},r.a.createElement("button",{onClick:this.handleCloseModalClick},"x"),r.a.createElement(h,{ref:this.statsRef}))))}}]),a}(r.a.Component),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(G,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}],[[11,1,2]]]);
//# sourceMappingURL=main.20f57891.chunk.js.map