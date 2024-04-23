import { TouchableOpacityProps } from "react-native";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export default function ButtonIcon({ icon, type = "PRIMARY" }: Props) {
  return (
    <Container>
      <Icon name={icon} type="PRIMARY" />
    </Container>
  );
}