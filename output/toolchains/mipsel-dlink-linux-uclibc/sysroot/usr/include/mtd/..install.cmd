cmd_/home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/mtd/.install := /bin/bash scripts/headers_install.sh /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/mtd   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/mtd/inftl-user.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/mtd/mtd-abi.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/mtd/mtd-user.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/mtd/nftl-user.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/mtd/ubi-user.h ; for F in ; do echo "\#include <asm-generic/$$F>" > /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/mtd/$$F; done; touch /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/mtd/.install
