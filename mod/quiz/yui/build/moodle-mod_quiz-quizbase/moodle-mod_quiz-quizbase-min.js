YUI.add("moodle-mod_quiz-quizbase",function(e,t){var i=function(){i.superclass.constructor.apply(this,arguments)};e.extend(i,e.Base,{registermodules:[],register_module:function(e){return this.registermodules.push(e),this},invoke_function:function(e,t){for(var i in this.registermodules)e in this.registermodules[i]&&this.registermodules[i][e](t);return this}},{NAME:"mod_quiz-quizbase",ATTRS:{}}),M.mod_quiz=M.mod_quiz||{},M.mod_quiz.quizbase=M.mod_quiz.quizbase||new i,M.mod_quiz.edit=M.mod_quiz.edit||{},M.mod_quiz.edit.swap_sections=function(e,t,i){var s="mod-quiz-edit-content",o="section_add_menus",s=e.Node.all("."+s+" li.section");s.item(t).one("."+o).swap(s.item(i).one("."+o))},M.mod_quiz.edit.process_sections=function(e,t,i,s,o){var n,u,r,d,m,a="sectionname",c=".left .section-handle .icon";if("move"===i.action){for(o<s&&(n=o,o=s,s=n),m=s;m<=o;m++)t.item(m).one("."+a).setContent(i.sectiontitles[m]),d=(r=(u=t.item(m).one(c)).getAttribute("alt")).lastIndexOf(" "),d=r.substr(0,d+1)+m,u.setAttribute("alt",d),u.setAttribute("title",d),t.item(m).removeClass("current");-1!==i.current&&t.item(i.current).addClass("current")}}},"@VERSION@",{requires:["base","node"]});