cmd_/home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/scsi/fc/.install := /bin/bash scripts/headers_install.sh /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/scsi/fc   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/scsi/fc/fc_els.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/scsi/fc/fc_fs.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/scsi/fc/fc_gs.h   /home/builder/buildroot_mtk/output/build/linux-headers-3.10/include/uapi/scsi/fc/fc_ns.h ; for F in ; do echo "\#include <asm-generic/$$F>" > /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/scsi/fc/$$F; done; touch /home/builder/buildroot_mtk/output/host/mipsel-dlink-linux-uclibc/sysroot/usr/include/scsi/fc/.install