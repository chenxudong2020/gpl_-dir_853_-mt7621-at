cmd_/home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/byteorder/.install := /bin/bash scripts/headers_install.sh /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/byteorder   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/linux/byteorder/big_endian.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/linux/byteorder/little_endian.h ; for F in ; do echo "\#include <asm-generic/$$F>" > /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/byteorder/$$F; done; touch /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/linux/byteorder/.install
