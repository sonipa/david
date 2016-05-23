import 'package:angular2/core.dart';
import 'package:david/sprites/people/david-sprite.component.dart';

@Component(
    selector: 'david-app',
    directives: const [DavidSpriteComponent],
    templateUrl: 'package:david/stage.component.html',
    styleUrls: const ['package:david/stage.component.css'])
class StageComponent {
  String clickMessage = '++';
  doSomething($event) {
    clickMessage += ' ++';
  }
}
