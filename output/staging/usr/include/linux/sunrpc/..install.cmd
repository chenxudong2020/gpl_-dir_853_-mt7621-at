cmd_/home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/sunrpc/.install := /bin/bash scripts/headers_install.sh /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/sunrpc   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/linux/sunrpc/debug.h ; for F in ; do echo "\#include <asm-generic/$$F>" > /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/sunrpc/$$F; done; touch /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/sunrpc/.install