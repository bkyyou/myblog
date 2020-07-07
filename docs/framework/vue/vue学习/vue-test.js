// 源码
function createCompilerCreator (baseCompile) {
	return function createCompiler (baseOptions) {
		// 开始进行编译的入口
		function compile (
			template,
			options
		) {
			var finalOptions = Object.create(baseOptions);
			var errors = [];
			var tips = [];

			var warn = function (msg, range, tip) {
				(tip ? tips : errors).push(msg);
			};

			if (options) {
				if (options.outputSourceRange) {
					// $flow-disable-line
					var leadingSpaceLength = template.match(/^\s*/)[0].length;

					warn = function (msg, range, tip) {
						var data = { msg: msg };
						if (range) {
							if (range.start != null) {
								data.start = range.start + leadingSpaceLength;
							}
							if (range.end != null) {
								data.end = range.end + leadingSpaceLength;
							}
						}
						(tip ? tips : errors).push(data);
					};
				}
				// merge custom modules
				if (options.modules) {
					finalOptions.modules =
						(baseOptions.modules || []).concat(options.modules);
				}
				// merge custom directives
				if (options.directives) {
					finalOptions.directives = extend(
						Object.create(baseOptions.directives || null),
						options.directives
					);
				}
				// copy other options
				for (var key in options) {
					if (key !== 'modules' && key !== 'directives') {
						finalOptions[key] = options[key];
					}
				}
			}

			finalOptions.warn = warn;

			var compiled = baseCompile(template.trim(), finalOptions);
			{
				detectErrors(compiled.ast, warn);
			}
			compiled.errors = errors;
			compiled.tips = tips;
			return compiled
		}

		return {
			compile: compile,
			compileToFunctions: createCompileToFunctionFn(compile)
		}
	}
}

var createCompiler = createCompilerCreator(function baseCompile (  // return function(){}
	template,
	options
) {
	var ast = parse(template.trim(), options);
	if (options.optimize !== false) {
		optimize(ast, options);
	}
	var code = generate(ast, options);
	return {
		ast: ast,
		render: code.render,
		staticRenderFns: code.staticRenderFns
	}
});

var ref$1 = createCompiler(baseOptions); // return {compileToFunctions: function(){}}
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

// 参数： 模板   配置项
var ref = compileToFunctions(template, {
	outputSourceRange: "development" !== 'production',
	shouldDecodeNewlines: shouldDecodeNewlines,
	shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
	// 直在 完整构建版中的浏览器内编译可用， 使用 cli 时 不可用，编译器代码被移除
	delimiters: options.delimiters,  // 改变默认的插入分隔符
	// 直在 完整构建版中的浏览器内编译可用， 使用 cli 时 不可用，编译器代码被移除
	comments: options.comments  // 是否保留 代码中的注释
}, this);
// this 指得是 Vue 根实例

// 需要了解的
var ref = compileToFunctions(template);