'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var Unity3dGenerator = module.exports = function Unity3dGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Unity3dGenerator, yeoman.generators.Base);

Unity3dGenerator.prototype.askFor = function askFor() {
  // have Yeoman greet the user.
  console.log(this.yeoman);
};

Unity3dGenerator.prototype.app = function app() {
  this.mkdir('app');

  this.copy('unity/Assets/Main.unity'             , 'app/Assets/Main.unity'            );
  this.copy('unity/Assets/Main.unity.meta'        , 'app/Assets/Main.unity.meta'       );
  this.copy('unity/Assets/Resources.meta'         , 'app/Assets/Resources.meta'        );
  this.copy('unity/Assets/Resources/.placeholder' , 'app/Assets/Resources/.placeholder');

  this.copy('unity/ProjectSettings/AudioManager.asset'        , 'app/ProjectSettings/AudioManager.asset'       );
  this.copy('unity/ProjectSettings/DynamicsManager.asset'     , 'app/ProjectSettings/DynamicsManager.asset'    );
  this.copy('unity/ProjectSettings/EditorBuildSettings.asset' , 'app/ProjectSettings/EditorBuildSettings.asset');
  this.copy('unity/ProjectSettings/EditorSettings.asset'      , 'app/ProjectSettings/EditorSettings.asset'     );
  this.copy('unity/ProjectSettings/GraphicsSettings.asset'    , 'app/ProjectSettings/GraphicsSettings.asset'   );
  this.copy('unity/ProjectSettings/InputManager.asset'        , 'app/ProjectSettings/InputManager.asset'       );
  this.copy('unity/ProjectSettings/NavMeshLayers.asset'       , 'app/ProjectSettings/NavMeshLayers.asset'      );
  this.copy('unity/ProjectSettings/NetworkManager.asset'      , 'app/ProjectSettings/NetworkManager.asset'     );
  this.copy('unity/ProjectSettings/Physics2DSettings.asset'   , 'app/ProjectSettings/Physics2DSettings.asset'  );
  this.copy('unity/ProjectSettings/ProjectSettings.asset'     , 'app/ProjectSettings/ProjectSettings.asset'    );
  this.copy('unity/ProjectSettings/QualitySettings.asset'     , 'app/ProjectSettings/QualitySettings.asset'    );
  this.copy('unity/ProjectSettings/TagManager.asset'          , 'app/ProjectSettings/TagManager.asset'         );
  this.copy('unity/ProjectSettings/TimeManager.asset'         , 'app/ProjectSettings/TimeManager.asset'        );
};

Unity3dGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('_package.json', 'package.json' );
  this.copy('editorconfig' , '.editorconfig');
  this.copy('gitignore'    , '.gitignore'   );
};