import 'package:angular2/core.dart';

@Component(
    selector: 'david-sprite',
    templateUrl: 'package:david/sprites/people/david-sprite.component.html',
    styleUrls: const [
      'package:david/sprites/people/david-sprite.component.css'
    ])
class DavidSpriteComponent {
  Integer leftPosition = 200;
  onClickMe() {
    leftPosition += 20;
  }
}
