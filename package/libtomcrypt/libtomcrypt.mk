################################################################################
#
# libtomcrypt
#
################################################################################

LIBTOMCRYPT_VERSION = 1.18.2
LIBTOMCRYPT_SITE = $(DLINK_STORAGE)
LIBTOMCRYPT_SOURCE = crypt-$(LIBTOMCRYPT_VERSION).tar.xz
LIBTOMCRYPT_LICENSE = WTFPL
LIBTOMCRYPT_LICENSE_FILES = LICENSE
LIBTOMCRYPT_INSTALL_STAGING = YES
LIBTOMCRYPT_INSTALL_TARGET = NO # only static library
LIBTOMCRYPT_DEPENDENCIES = libtommath

LIBTOMCRYPT_CFLAGS = -I./src/headers $(TARGET_CFLAGS) -DLTC_SOURCE -DLTM_DESC

define LIBTOMCRYPT_BUILD_CMDS
	$(TARGET_MAKE_ENV) $(MAKE) -C $(@D) $(TARGET_CONFIGURE_OPTS) CFLAGS="$(LIBTOMCRYPT_CFLAGS)"
endef

define LIBTOMCRYPT_INSTALL_STAGING_CMDS
	$(TARGET_MAKE_ENV) $(MAKE) -C $(@D) DESTDIR="$(STAGING_DIR)" \
		PREFIX=/usr NODOCS=1 INSTALL_USER=$(shell id -u) \
		INSTALL_GROUP=$(shell id -g) install
endef

$(eval $(call GENTARGETS))
