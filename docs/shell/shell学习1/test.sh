#! /bin/bash

# echo '特殊变量 $0 $1 $2... 的实践'
# echo '结果：' $0 $1 $2

# echo '##########################'
# echo '特殊变量 $# 获取参数总个数'
# echo '结果：' $#

# echo '##########################'
# echo '特殊变量 $* 获取参数总个数'
# echo '结果：' $*

# echo '##########################'
# echo '特殊变量 $@ 获取参数总个数'
# echo '结果：' $@



# echo "print each param from \$\*"
# for var in "$*"
# do 
#   echo "$var"
# done

# echo "print each param from \$\@"
# for var in "$@"
# do 
#   echo "$var"
# done

# $# 获取参数个数    -ne 不等于的情况 && 并且
[ $# -ne 2 ] && {
  echo "must be two args"
  exit 119 # 终止程序运行，且返回 119 状态码 提供当前 shell 的 $? 变量，若是在函数里可以用 return 119 用法
}
echo ok

echo "当前脚本执行id: $$"






