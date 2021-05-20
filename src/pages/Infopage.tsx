import "./Infopage.css";
import { Paper } from "@material-ui/core";
import { InfoHead, HelperText, OwnerName} from "../styles/Infopage.styled";
function Infopage() {

  return (
    <div className="info">
      <InfoHead>Info o knižnici</InfoHead>
      <Paper elevation={3}>
        <HelperText>
          Webová stránka knižnice SPŠT v Bardejove. Na tejto stránke sú dostupné
          všetky knihy ktoré sa nachádzajú v školskej knižnici. Knižnicu nájdete
          pri vstupe na internát na 3 poschodí, smer doľava.
          <OwnerName>Správkyňou je Mgr. Nataša Dzubáková</OwnerName>
        </HelperText>
      </Paper>
    </div>
  );
}

export default Infopage;