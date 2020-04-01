<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'infernof_wp166' );

/** MySQL database username */
define( 'DB_USER', 'infernof_wp166' );

/** MySQL database password */
define( 'DB_PASSWORD', '.h-SE29p8Y' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'xslixvs3nwusvihsgzr4al2fifdkhstsv1wke9uhg7vfd3blrqjlzft8jvcjx6ch' );
define( 'SECURE_AUTH_KEY',  'guxcrvpkiwdukrac8qgpqpfflvxedu57tlztd8riqomobrila1iq6anespelgyfz' );
define( 'LOGGED_IN_KEY',    'p47cnidxfl03wrp69yzeeh87zk21jtx5trrgc8bkewmpdipd9ao94avndskydgvr' );
define( 'NONCE_KEY',        'pzfb2fvidfga3lzs5hslicuuquaxe4wzw9321ermkpf3twqmk6etidctaagmv6of' );
define( 'AUTH_SALT',        'e5enzxiap5hagno5mecttvkv2z8igkqm37uyagaxk5ka6m2t0gyxlmz19c0xassa' );
define( 'SECURE_AUTH_SALT', 'ipscni5nfui1aow558nowqmdqnfmetmzkvwaeckipljinbrg3tsbabssvtuuzdrz' );
define( 'LOGGED_IN_SALT',   'ykdjcn8hwioli61i7auz6knegrsfv3lxiooaayohgglw9nyrqd7pknerqpenovxj' );
define( 'NONCE_SALT',       'szdgi5fxkudwdz2rjxkrma3mlyr6d7ljlzlncv9newazkpfntvesudklalvc5f4s' );

define('JWT_AUTH_SECRET_KEY', 'secret');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpni_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
