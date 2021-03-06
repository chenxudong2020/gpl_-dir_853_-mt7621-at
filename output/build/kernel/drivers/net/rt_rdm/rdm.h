
#ifndef	__RDM__H__
#define	__RDM__H__

#include <linux/fs.h>       /* everything... */
#include <asm/mach-ralink/rt_mmap.h>

#define RTPRIV_ICOTL_SYSCTL		(SIOCIWFIRSTPRIV + 0x01) // system control
#define RTPRIV_ICOTL_TIMER		(SIOCIWFIRSTPRIV + 0x02) // timer
#define RTPRIV_ICOTL_ITRCTL		(SIOCIWFIRSTPRIV + 0x03) // interrupt control
#define RTPRIV_ICOTL_MEMCTL		(SIOCIWFIRSTPRIV + 0x04) // memory control
#define RTPRIV_ICOTL_TSTCTL		(SIOCIWFIRSTPRIV + 0x05) // Test Control
#define RTPRIV_ICOTL_UART		(SIOCIWFIRSTPRIV + 0x06) // UART
#define RTPRIV_ICOTL_PRGIO		(SIOCIWFIRSTPRIV + 0x07) // Programming I/O
#define RTPRIV_ICOTL_LCD		(SIOCIWFIRSTPRIV + 0x08) // LCD
#define RTPRIV_ICOTL_I2C		(SIOCIWFIRSTPRIV + 0x09) // I2C
#define RTPRIV_ICOTL_CLOCK		(SIOCIWFIRSTPRIV + 0x0A) // realtime clock
#define RTPRIV_ICOTL_SPI		(SIOCIWFIRSTPRIV + 0x0B) // SPI
#define RTPRIV_ICOTL_UARTL		(SIOCIWFIRSTPRIV + 0x0C) // UART Lite
#define RTPRIV_ICOTL_PCI		(SIOCIWFIRSTPRIV + 0x0D) // PCI Controller

#define RDM_SYSCTL_ADDR			RALINK_SYSCTL_BASE // system control

#define RT_RDM_CMD_SHOW			0x6B01
#define RT_RDM_CMD_WRITE		0x6B02
#define RT_RDM_CMD_READ			0x6B03
#define RT_RDM_CMD_WRITE_SILENT		0x6B04
#define RT_RDM_CMD_DUMP			0x6B05
#define RT_RDM_CMD_DUMP_FPGA_EMU	0x6B06
#define RT_RDM_CMD_SHOW_BASE		0x6B0C
#define RT_RDM_CMD_SET_BASE		0x6B0D
#define RT_RDM_CMD_SET_BASE_SYS		0x6B0E
#define RT_RDM_CMD_SET_BASE_WLAN	0x6B0F
#define RT_RDM_CMD_DUMP_QUEUE_OFFSET 0x6B10
#define RT_RDM_CMD_DUMP_QUEUE 0x6B11

#define RT_RDM_DUMP_RANGE		16  // unit=16bytes
#endif
