(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",[s._v("Jupyter Notebook Tips")]),s._m(0),s._m(1),s._m(2),a("ul",[s._m(3),s._m(4),s._m(5),s._m(6),a("li",[a("p",[s._v("Connect Github to "),a("a",{attrs:{href:"https://mybinder.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Binder"),a("OutboundLink")],1),s._v(" to display notebooks to others")])])])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"magics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#magics","aria-hidden":"true"}},[this._v("#")]),this._v(" Magics")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("p",[s._v("Manage environment variables")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("env NUM_THREADS"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("4")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),a("li",[a("p",[s._v("Get details")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit?\n"),a("span",{attrs:{class:"token builtin"}},[s._v("list")]),s._v("?\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),a("li",[a("p",[s._v("Measure execution time")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# Measure entire block")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("time\n"),a("span",{attrs:{class:"token comment"}},[s._v("# Measure a single line")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("timeit func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),a("li",[a("p",[s._v("Execute other python/notebook")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# Excute code in demo.ipynb (can be .py)")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("run "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("demo"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ipynb\n"),a("span",{attrs:{class:"token comment"}},[s._v("# Load content in demo.py to the cell")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("load "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("demo"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),a("li",[a("p",[s._v("Store data between notebooks")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("data "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'this is the string I want to pass to different notebook'")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("store data\n"),a("span",{attrs:{class:"token keyword"}},[s._v("del")]),s._v(" data\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# Read `data` in another notebook")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("store "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("r data "),a("span",{attrs:{class:"token comment"}},[s._v("# variable name must be the same")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),a("li",[a("p",[s._v("Write cell code to python file")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("writefile pythoncode"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n"),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" numpy\n"),a("span",{attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("append_if_not_exists")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" x "),a("span",{attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        \n"),a("span",{attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("some_useless_slow_function")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    arr "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token builtin"}},[s._v("list")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token builtin"}},[s._v("range")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        x "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" numpy"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("random"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("randint"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10000")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        append_if_not_exists"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),a("li",[a("p",[s._v("Display file content")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("pycat pythoncode"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),a("li",[a("p",[s._v("Profiling")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# Profile run time")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("prun func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# Profile run time by line")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# !pip install line_profiler")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("load_ext line_profiler \n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("lprun func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# Profile memory")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("# !pip install memory_profiler")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("load_ext memory_profiler \n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("mprun func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# Measure the memory use of a single statement")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("memit func"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])]),a("li",[a("p",[s._v("Debugging")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("debug "),a("span",{attrs:{class:"token comment"}},[s._v("# launch ipdb debugger")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("pdb   "),a("span",{attrs:{class:"token comment"}},[s._v("# set breakpoint (== `import ipdb; ipdb.set_trace()`)")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),a("li",[a("p",[s._v("Use other kernels for the cell")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("python2\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("python3\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("ruby\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("perl\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("bash\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("R\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tools","aria-hidden":"true"}},[this._v("#")]),this._v(" Tools")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("p",[s._v("Write fast code using Cython")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("!pip install cython\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("load_ext Cython\n\n"),a("span",{attrs:{class:"token operator"}},[s._v("%")]),a("span",{attrs:{class:"token operator"}},[s._v("%")]),s._v("cython\n"),a("span",{attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("myltiply_by_2")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token builtin"}},[s._v("float")]),s._v(" x"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2.0")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" x\n\nmyltiply_by_2"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("23")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("# 46.0")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("p",[s._v("Install Jupyter Contrib Extensions")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("pip install https"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token operator"}},[s._v("//")]),s._v("github"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("ipython"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("contrib"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("jupyter_contrib_nbextensions"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("tarball"),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v("master\npip install jupyter_nbextensions_configurator\njupyter contrib nbextension install "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("user\njupyter nbextensions_configurator enable "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("user\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("p",[s._v("RISE: jupyter notebook presentation")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("conda install "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("c damianavila82 rise  "),a("span",{attrs:{class:"token comment"}},[s._v("# recommended")]),s._v("\npip install RISE  "),a("span",{attrs:{class:"token comment"}},[s._v("# less recommended")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("li",[a("p",[s._v("Display media")]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" IPython"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("display "),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" display"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Image\ndisplay"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Image"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'demo.jpg'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);