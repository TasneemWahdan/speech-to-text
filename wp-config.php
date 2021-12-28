<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'medevent_WPFH7');

/** MySQL database username */
define('DB_USER', 'medevent_WPFH7');

/** MySQL database password */
define('DB_PASSWORD', 'ex{(FP_IQdd3:oL.D');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '2cb02f9bb2dd69d834a84bcf1879187e19e71e3b329cc1e29dd2da3b2ac541fe');
define('SECURE_AUTH_KEY', 'e7c46e908210677d13a5bc133e0c7cf8dd1ff21eb30373c8e34e934c6a6033bb');
define('LOGGED_IN_KEY', 'a33a107983605ad7f66c531e8b3a5e27a453e1611eb034c784075d01b364b5cd');
define('NONCE_KEY', '84e03069974b4be9bb8473c322d5664bc2a76787e9d2a8e8b4517b947f0a0c2b');
define('AUTH_SALT', 'bf28f39ecff825a32e49c6c9ef11d9cedd0abe686bac45d7e89267167f6ec836');
define('SECURE_AUTH_SALT', 'd8254980599e99d6fffdd8a638ef892fa22687d0c020d36cc50611cef925d405');
define('LOGGED_IN_SALT', 'cefd0d22955514b5f244b617f84fe7d6913c0dc33ce39c08c3a15f82368d6cb0');
define('NONCE_SALT', '050a522909eb54452498f565885990108de63066d880702b89250dc403689b2d');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'Vse_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
