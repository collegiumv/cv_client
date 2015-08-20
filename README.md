# CVOS - The Premier Honors Computing Experience

##Summary
CVOS (CEE-VOS) is a a customized system designed for the Collegium V Honors College.  By default, CVOS loads the LXDE desktop environment, providing a familiar interface for Windows users.  The entire user experience is fully customizable should the defaults not be satisfactory.  CVOS comes with a variety of software packages, including web browsers, office suites, image editing software, and much more.

##Requesting additional software
In the event you would like software which is not included in the CVOS default installation, don't hesitate to request it.  Software requests should be submitted to [this page](https://github.com/collegiumv/cv_client_bleeding/issues).  Please provide a summary of the program's usefulness, a link to the software package (if possible), and a note of any special requirements or configurations (if applicable).

If you have any questions, or are unable to submit a ticket, let a Collegium V Administrator know and they will be happy to help.

---
###Why we use CVOS
For those with a technical background who wish to know why we use a custom operating system, the explanation below has been provided:

CV is unique at UTD in that it represents the only fully separate network from the primary network at UTD.  Everything from server operating systems to what software is installed is managed internally and this presents some challenges not found elsewhere in UTD.

For many years, the Collegium V Honors Lounge was home to wide range of operating systems.  Desktop computers ran Windows, Mac OSX, or various media-centric systems, while servers ran various flavors of BSD or Debian Linux.  As technology and the Collegium V lounge evolved, it became impractical to provide a high level of service while at the same time maintaining good operating practices.  Additionally, the amount on incompatible technology in use on the network, many of which had partially broken or poorly documented implementations on Windows, had grown to a breaking point.  Eventually, the load became too great for the available resources, and it was decided to take a fresh look at the resources available and the goals to be met.  Thus, the CVOS project began in 2015 to provide a robust, scalable infrastructure that to provide high quality lounge services.  The end result is a custom respin of the Ubuntu Linux distribution with support for all the needs of the lounge.

Some of the long term gains from the CVOS project are:

  * Quick turnaround for software requests
      * Previously a request could take a few weeks to fill, far too long in an academic environment.
      * Now requests can be filled in as little as 10 minutes for standard packages (of which there are tens of thousands).
  * Improved security
      * Its no secret that Windows has some security flaws.
      * CVOS is built on top of a codebase recognized internationally for its security.
  * Minimal downtime
      * Rebuilding a Windows workstation takes approximately 4 hours.
      * Rebuilding a CVOS workstation takes approximately 1 hour, and is fully automatic.
  * Greater customization
      * Everything from the login screen to the default desktop can be changed.
      * Default configurations are provided to provide an experience similar to Windows or Mac OSX.
