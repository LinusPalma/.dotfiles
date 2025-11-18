// alle infos zu allen devices die lampen sind
// curl -X GET -H "Authorization: Bearer <token>" https://ha.palma-homelab.com:443/api/states | jq '.[] | select(.entity_id | startswith("light."))'
//
//nur die Namen und den State der lampen angezeigt:
//curl -X GET -H "Authorization: Bearer <token>" https://ha.palma-homelab.com:443/api/states | jq '.[] | select(.entity_id | startswith("light.")) | {entity_id, state}'
