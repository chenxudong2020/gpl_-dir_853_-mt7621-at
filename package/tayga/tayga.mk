TAYGA_SITE = $(DLINK_GIT_STORAGE)/tayga
TAYGA_VERSION = master
TAYGA_LICENSE = GPL-2.0-or-later
TAYGA_LICENSE_FILES = COPYING
TAYGA_AUTORECONF = YES
TAYGA_INSTALL_STAGING = NO
TAYGA_INSTALL_TARGET = YES

ifeq ($(BR2_DSYSINIT),y)
TAYGA_DEPENDENCIES += jansson deuteron_framework
TAYGA_LDFLAGS += -ljansson -ld_service_notify -Wl,-rpath-link,$(STAGING_DIR)/lib -Wl,-rpath-link,$(STAGING_DIR)/usr/lib
endif

TAYGA_MAKE_OPT += CC="$(TARGET_CC)" LD="$(TARGET_LD)" CFLAGS="$(TARGET_CFLAGS)" LDFLAGS="$(TARGET_LDFLAGS) $(TAYGA_LDFLAGS)"

define TAYGA_INSTALL_TARGET_CMDS
	$(INSTALL) -D -m 0755 $(@D)/tayga $(TARGET_DIR)/usr/bin/tayga
	$(TARGET_STRIP) $(TARGET_DIR)/usr/bin/tayga
endef

$(eval $(call AUTOTARGETS))
