const fr = {
  common: {
    disconnected: 'DECONNECTÉ',
    connected: 'CONNECTÉ',
    search: 'Rechercher par le nom',
    property: 'Propriétés',
    add: 'Ajouter',
    view: 'Voire',
    edit: 'Éditer',
    delete: 'Effacer',
    lost: 'Perdu',
    nodes: 'Nœuds',
    resources: 'Ressources',
    volumes: 'Volumes',
    error_reports: "Rapport d'erreurs",
    disk_creation_records: 'Enregistrements de création de disque',
    deploy: 'Déployer',
  },
  menu: {
    dashboard: 'Tableau de bord',
    support: 'Support',
    inventory: 'Inventaire',
    node: 'Nœuds',
    storage_pools: 'Piscines de stockage',
    error_reports: "Rapport d'erreurs",
    software_defined: 'Défini par le logiciel',
    resource_groups: 'Groupes de ressources',
    resource_definitions: 'Définitions des ressources',
    resources: 'Ressources',
    volumes: 'Volumes',
    node_ip_addrs: 'Adresses IP',
    remotes: 'Télécommandes',
    linstor: 'LINSTOR',
    s3: 'S3',
  },
  node: {
    node_list: 'Liste de nœuds',
    node_name: 'Nom',
    default_ip: 'IP par défaut',
    default_port: 'Port par défaut',
    node_type: 'Type',
    node_status: 'Statut',
    node_detail: 'Détails du nœud',
  },
  storage_pool: {
    list: 'Liste des piscines de stockage',
    name: 'Nom',
    node_name: 'Nom du nœud',
    network_preference: 'Préférence de réseau',
    disk: 'Disque',
    provider_kind: 'Type de fournisseur',
    capacity: 'Capacité',
    free_capacity: 'Capacité gratuite',
    total_capacity: 'Capacité totale',
    supports_snapshots: 'Snapshot',
  },
  ip_address: {
    list: "Liste d'adresses",
    node: 'Nœuds',
    ip_address: 'Adresses IP',
    tcp_port: 'Port TCP',
    alias: 'Alias',
    is_management_network: 'Est le réseau de gestion',
  },
  error_report: {
    name: 'ID',
    time: 'Temps',
    message: 'Message',
    action: 'Action',
    detail_title: "Détails du rapport d'erreur",
    list_title: "Liste des rapports d'erreurs",
  },
  dashboard: {
    title: 'Tableau de bord',
  },
  resource_group: {
    list: 'Liste des groupes de ressources',
    name: 'Nom du groupe de ressources',
    place_count: 'Place Count',
    storage_pools: 'Piscine(s) de stockage',
    replication: 'Mode de réplication',
    auto: 'Auto',
    async: 'Asincrónico',
    semi_sync: 'Mémoire synchrone',
    sync: 'Synchronisé',
    diskless: 'Sans disque',
    description: 'Description',
  },
  resource_definition: {
    name: 'Nom',
    list: 'Liste de définition de ressource',
    resource_group_name: 'Nom du groupe de ressources',
    size: 'Taille',
    port: 'Port',
    state: 'État',
    replication: 'Mode de réplication',
    auto: 'Auto',
    async: 'Asincrónico',
    semi_sync: 'Mémoire synchrone',
    sync: 'Synchronisé',
    diskless: 'Sans disque',
    description: 'Description',
  },
  resource: {
    list: 'Liste des ressources',
    resource_name: 'Nom',
    resource_node: 'Nœuds',
    resource_port: 'Port',
    resource_usage: "Statut d'utilisation",
    resource_conn: 'Statut de connexion',
    resource_state: 'État',
    resource_create_time: 'Créer du temps',
  },
  volume: {
    list: 'Liste de volume',
    name: 'Nom',
    node: 'Nœuds',
    resource: 'Ressources',
    storage_pool: 'Piscines de stockage',
    device_name: 'Nom du périphérique',
    allocated: 'Alloué',
    in_use: "En état d'utilisation",
    state: 'État',
  },
  controller: {
    controller_detail: 'Détail du contrôleur',
  },
  // Remote / Linstor
  linstor: {
    list: 'Liste Linstor',
  },
};

export default fr;
