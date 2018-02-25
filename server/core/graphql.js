const _ = require('lodash')
const fs = require('fs')
const gqlTools = require('graphql-tools')
const path = require('path')

/* global wiki */

const typeDefs = fs.readFileSync(path.join(wiki.SERVERPATH, 'schemas/types.graphql'), 'utf8')

const DateScalar = require('../schemas/scalar-date')
const AuthenticationResolvers = require('../schemas/resolvers-authentication')
const CommentResolvers = require('../schemas/resolvers-comment')
const DocumentResolvers = require('../schemas/resolvers-document')
const FileResolvers = require('../schemas/resolvers-file')
const FolderResolvers = require('../schemas/resolvers-folder')
const GroupResolvers = require('../schemas/resolvers-group')
const SettingResolvers = require('../schemas/resolvers-setting')
const TagResolvers = require('../schemas/resolvers-tag')
const TranslationResolvers = require('../schemas/resolvers-translation')
const UserResolvers = require('../schemas/resolvers-user')

const resolvers = _.merge(
  AuthenticationResolvers,
  CommentResolvers,
  DocumentResolvers,
  FileResolvers,
  FolderResolvers,
  GroupResolvers,
  SettingResolvers,
  TagResolvers,
  TranslationResolvers,
  UserResolvers,
  DateScalar
)

const Schema = gqlTools.makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = Schema