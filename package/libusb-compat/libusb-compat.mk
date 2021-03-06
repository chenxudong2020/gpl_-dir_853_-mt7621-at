#############################################################
#
# libusb-compat
#
#############################################################
LIBUSB_COMPAT_VERSION = 0.1.12
LIBUSB_COMPAT_SITE = ${DLINK_GIT_STORAGE}/libusb-compat
LIBUSB_COMPAT_LICENSE = LGPL-2.1-only
LIBUSB_COMPAT_LICENSE_FILES = COPYING
LIBUSB_COMPAT_DEPENDENCIES = host-pkg-config libusb
LIBUSB_COMPAT_INSTALL_STAGING = YES
LIBUSB_COMPAT_INSTALL_TARGET = YES
LIBUSB_COMPAT_CONF_OPT := --prefix=/usr

define LIBUSB_COMPAT_FIXUP_CONFIG
	$(SED) 's%prefix=/usr%prefix=$(STAGING_DIR)/usr%' \
	    -e 's%exec_prefix=/usr%exec_prefix=$(STAGING_DIR)/usr%' \
		$(STAGING_DIR)/usr/bin/libusb-config
endef

LIBUSB_COMPAT_POST_INSTALL_STAGING_HOOKS+=LIBUSB_COMPAT_FIXUP_CONFIG

$(eval $(call AUTOTARGETS))
