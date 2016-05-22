import 'package:angular2/core.dart';
import 'package:david/sprites/puppets/david.dart';

@Component(
    selector: 'david-app',
    directives: [DavidSpriteComponent],
    templateUrl: 'package:david/stage.html',
    styleUrls: const ['package:david/stage.css'])
class StageComponent {}
